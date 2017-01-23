const express = require('express'),
    passport = require('passport'),
    mongodb = require('mongodb').MongoClient;

const authRouter = express.Router();

const router = () => {
    authRouter.route('/signUp')
        .post(function(req, res) {
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collection  = db.collection('users');
                let user = {
                    username: req.body.userName,
                    password: req.body.password
                };

                collection.insert(user, function(err, results) {
                    req.login(results.ops[0], function() {
                        res.redirect('/auth/profile');
                    });
                });
            });
        });

    authRouter.route('/signIn')
        .post(passport.authenticate('local', {
            failureRedirect: '/'
        }), function(req, res) {
            res.redirect('/auth/profile');
        });

    authRouter.route('/profile')
        .all(function(req, res, next) {
            if(!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function(req, res) {
            res.json(req.user);
        });
    return authRouter;
};

module.exports = router;