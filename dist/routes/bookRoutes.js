'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookRouter = _express2.default.Router();

var router = function router(nav) {
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
    bookRouter.route('/').get(function (req, res) {
        res.render('bookListView', {
            title: 'Read some books',
            nav: nav,
            books: books
        });
    });

    bookRouter.route('/:id').get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Read some books',
            nav: nav,
            book: books[id]
        });
    });
    return bookRouter;
};

module.exports = router;