'use strict';

const express =  require('express'),
    mongodb = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID,
    libraryAppUrl = require('../misc/urls/libraryAppUrl'),
    bookRouter = express.Router();

const router = nav => {

    const bookController = require('../controllers/bookController')(null, nav);

    bookRouter.use(bookController.middleware);
    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router;