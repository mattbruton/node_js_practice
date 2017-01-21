let express = require('express');
const mongodb = require('mongodb').MongoClient;

const adminRouter = express.Router();

const books = [
        {
            title: 'Advanced Boiling',
            genre: 'Cooking',
            author: 'Dogman McCatface',
            read: false
        },
        {
            title: 'Learn To Tie Your Shoes in Just Six Years',
            genre: 'Self-Help',
            author: 'Fishman Birdface',
            read: true
        },
        {
            title: 'McDonald\'s Forgot My Napkins and Other Scary First World Problems',
            genre: 'Nonfiction',
            author: 'Birdman McDogface',
            read: false
        },
        {
            title: 'Contact 2: Payday',
            genre: 'Science Fiction',
            author: 'Kitty Dogford',
            read: true
        },
        {
            title: 'Zerba, Context',
            genre: 'Biography',
            author: 'Zerba Zerberson',
            read: false
        }
    ];

const router = (nav) => {
    adminRouter.route('/addBooks')
        .get((req, res) => {
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collection = db.collection('books');
                collection.insertMany(books, (err, results) => {
                    res.send(results);
                    db.close();
                });
            });
        });

    return adminRouter;
};

module.exports = router;