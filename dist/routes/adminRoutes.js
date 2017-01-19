'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adminRouter = _express2.default.Router();

var router = function router(nav) {

    adminRouter.route('/addBooks').get(function (req, res) {
        res.send('inserting books...');
    });

    return adminRouter;
};

module.exports = router;