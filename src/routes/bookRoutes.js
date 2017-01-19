import express from 'express';

const bookRouter = express.Router();

const router = (nav) => {
    let books = [
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