'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bookRouter = _express2.default.Router();

var books = [{
    id: 0,
    title: 'Advanced Boiling',
    genre: 'Cooking',
    author: 'Dogman McCatface',
    read: false
}, {
    id: 1,
    title: 'Learn To Tie Your Shoes in Just Six Years',
    genre: 'Self-Help',
    author: 'Fishman Birdface',
    read: true
}, {
    id: 2,
    title: 'McDonald\'s Forgot My Napkins and Other Scary First World Problems',
    genre: 'Nonfiction',
    author: 'Birdman McDogface',
    read: false
}, {
    id: 3,
    title: 'Contact 2: Payday',
    genre: 'Science Fiction',
    author: 'Kitty Dogford',
    read: true
}, {
    id: 4,
    title: 'Zerba, Context',
    genre: 'Biography',
    author: 'Zerba Zerberson',
    read: false
}];

bookRouter.route('/').get(function (req, res) {
    res.render('bookListView', {
        title: 'Read some books',
        nav: [{
            Link: '/books',
            Text: 'Books'
        }, {
            Link: '/authors',
            Text: 'Authors'
        }],
        books: books
    });
});

bookRouter.route('/:id').get(function (req, res) {
    var id = req.params.id;
    res.render('bookView', {
        title: 'Read some books',
        nav: [{
            Link: '/books',
            Text: 'Books'
        }, {
            Link: '/authors',
            Text: 'Authors'
        }],
        book: books[id]
    });
});

exports.default = bookRouter;