'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongodb = require('mongodb').MongoClient;
var authRouter = _express2.default.Router();

var router = function router(nav) {
    authRouter.route('/signUp').post(function (req, res) {
        console.log(req.body);
        req.login(req.body, function () {
            res.redirect('/auth/profile');
        });
    });
    authRouter.route('/profile').get(function (req, res) {
        res.json(req.user);
    });
    return authRouter;
};

module.exports = router;