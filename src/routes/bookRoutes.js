import express from 'express';

const bookRouter = express.Router();

let books = [
    {
        id: 0,
        title: 'Book 1',
        genre: 'Cooking',
        author: 'Dogman McCatface',
        read: false
    },
    {
        id: 1,
        title: 'Book 2',
        genre: 'Self-Help',
        author: 'Fishman Birdface',
        read: true
    },
    {
        id: 2,
        title: 'Book 3',
        genre: 'Nonfiction',
        author: 'Birdman McDogface',
        read: false
    },
    {
        id: 3,
        title: 'Book 4',
        genre: 'Science Fiction',
        author: 'Kitty Dogford',
        read: true
    },
    {
        id: 4,
        title: 'Book 5',
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
            nav:
            [{
                Link: '/books',
                Text: 'Books'
            },
            {
                Link: '/authors',
                Text: 'Authors'
            }],
            books: books
        });
    });

bookRouter.route('/:id')
    .get((req, res) => {
        let id = req.params.id;
        res.render('bookView',
        {
            title: 'Read some books',
            nav:
            [{
                Link: '/books',
                Text: 'Books'
            },
            {
                Link: '/authors',
                Text: 'Authors'
            }],
            book: books[id]
        });
    });

export default bookRouter;