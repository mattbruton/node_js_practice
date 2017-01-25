'use strict';

const mongodb = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID,
    libraryAppUrl = require('../misc/urls/libraryAppUrl');

const bookController = (bookService, nav) => {

    const middleware = (req, res, next) => {
        // if (!req.user) {
        //     res.redirect('/');
        // }
        next();
    };

    const getIndex = (req, res) => {
        mongodb.connect(libraryAppUrl, (err, db) => {
            let collection = db.collection('books');
            collection.find({}).toArray((err, results) => {
                res.render('bookListView', {
                    title: 'Read some books',
                    nav: nav,
                    books: results
                });
                db.close();
            });
        });
    };

    const getById = function(req, res) {
        let id = new ObjectId(req.params.id);
        mongodb.connect(libraryAppUrl, function(err, db) {
            let collection = db.collection('books');
            collection.findOne({_id: id}, function(err, results) {
                bookService.getBookById(results.bookId,
                    function(err, book) {
                        res.render('bookView', {
                            title: results.title,
                            nav: nav,
                            book: results
                        });
                    });
                db.close();
            });
        });
    };

    return {
        middleware: middleware,
        getIndex: getIndex,
        getById: getById
    };
};

module.exports = bookController;