'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookRouter = _express2.default.Router();
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var router = function router(nav) {
    bookRouter.route('/').get(function (req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.find({}).toArray(function (err, results) {
                res.render('bookListView', {
                    title: 'Read some books',
                    nav: nav,
                    books: results
                });
                db.close();
            });
        });
    });

    bookRouter.route('/:id').get(function (req, res) {
        var id = new ObjectId(req.params.id);
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.findOne({ _id: id }, function (err, results) {
                res.render('bookView', {
                    title: results.title,
                    nav: nav,
                    book: results
                });
                db.close();
            });
        });
    });
    return bookRouter;
};

module.exports = router;