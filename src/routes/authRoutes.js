let express = require('express');
const mongodb = require('mongodb').MongoClient;
const authRouter = express.Router();

const router = () => {
    authRouter.route('/signUp')
        .post(function(req, res) {
            req.login(req.body, function() {
                res.redirect('/auth/profile');
            });
        });
    authRouter.route('/profile')
        .get(function(req, res) {
            res.json(req.user);
        });
    return authRouter;
};

module.exports = router;