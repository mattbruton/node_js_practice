let express =  require('express');

const bookRouter = express.Router();
const mongodb = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const router = (nav) => {
    bookRouter.route('/')
        .get((req, res) => {
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
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
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            let id = new ObjectId(req.params.id);
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('books');
                collection.findOne({_id: id} ,(err, results) => {
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