'use strict';

const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient,
    libraryAppUrl = require('../../misc/urls/libraryAppUrl');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, function (username, password, done) {
        mongodb.connect(libraryAppUrl, (err, db) => {
            let collection = db.collection('users');
            collection.findOne({username: username},
            function(err, results) {
                if (results.password === password) {
                    let user = results;
                    done(null, user);
                } else {
                    done(null, false, {message: 'Bad Password'});
                }
            });
        });
    }));
};