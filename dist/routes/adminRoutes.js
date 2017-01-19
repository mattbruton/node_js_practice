'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongodb = require('mongodb').MongoClient;

var adminRouter = _express2.default.Router();

var books = [{
    title: 'Advanced Boiling',
    genre: 'Cooking',
    author: 'Dogman McCatface',
    read: false
}, {
    title: 'Learn To Tie Your Shoes in Just Six Years',
    genre: 'Self-Help',
    author: 'Fishman Birdface',
    read: true
}, {
    title: 'McDonald\'s Forgot My Napkins and Other Scary First World Problems',
    genre: 'Nonfiction',
    author: 'Birdman McDogface',
    read: false
}, {
    title: 'Contact 2: Payday',
    genre: 'Science Fiction',
    author: 'Kitty Dogford',
    read: true
}, {
    title: 'Zerba, Context',
    genre: 'Biography',
    author: 'Zerba Zerberson',
    read: false
}];

var router = function router(nav) {
    adminRouter.route('/addBooks').get(function (req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        mongodb.connect(url, function (err, db) {
            var collection = db.collection('books');
            collection.insertMany(books, function (err, results) {
                res.send(results);
                db.close();
            });
        });
    });

    return adminRouter;
};

module.exports = router;