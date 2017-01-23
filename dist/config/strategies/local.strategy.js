'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongodb = require('mongodb').MongoClient,
    libraryAppUrl = require('../../misc/urls/libraryAppUrl');

module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, function (username, password, done) {
        mongodb.connect(libraryAppUrl, function (err, db) {
            var collection = db.collection('users');
            collection.findOne({ username: username }, function (err, results) {
                if (results.password === password) {
                    var user = results;
                    done(null, user);
                } else {
                    done(null, false, { message: 'Bad Password' });
                }
            });
        });
    }));
};