'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
    app.use(_passport2.default.initialize());
    app.use(_passport2.default.session());

    _passport2.default.serializeUser(function (user, done) {
        done(null, user);
    });

    _passport2.default.serializeUser(function (user, done) {
        done(null, user);
    });

    require('./strategies/local.strategy')();
};