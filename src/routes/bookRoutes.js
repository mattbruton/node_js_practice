import express from 'express';

const bookRouter = express.Router();

let router = (nav) => {
    let books = [
        {
            id: 0,
            title: 'Advanced Boiling',
            genre: 'Cooking',
            author: 'Dogman McCatface',
            read: false
        },
        {
            id: 1,
            title: 'Learn To Tie Your Shoes in Just Six Years',
            genre: 'Self-Help',
            author: 'Fishman Birdface',
            read: true
        },
        {
            id: 2,
            title: 'McDonald\'s Forgot My Napkins and Other Scary First World Problems',
            genre: 'Nonfiction',
            author: 'Birdman McDogface',
            read: false
        },
        {
            id: 3,
            title: 'Contact 2: Payday',
            genre: 'Science Fiction',
            author: 'Kitty Dogford',
            read: true
        },
        {
            id: 4,
            title: 'Zerba, Context',
            genre: 'Biography',
            author: 'Zerba Zerberson',
            read: false
        }
    ];
    bookRouter.route('/')
        .get((req, res) => {
            res.render('bookListView',
            {
                title: 'Read some books',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get((req, res) => {
            let id = req.params.id;
            res.render('bookView',
            {
                title: 'Read some books',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
};

module.exports = router;