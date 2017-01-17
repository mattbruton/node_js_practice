import express from 'express';

const bookRouter = express.Router();

let books = [
    {
        title: 'Book 1',
        genre: 'Cooking',
        author: 'Dogman McCatface',
        read: false
    },
    {
        title: 'Book 2',
        genre: 'Self-Help',
        author: 'Fishman Birdface',
        read: true
    },
    {
        title: 'Book 3',
        genre: 'Nonfiction',
        author: 'Birdman McDogface',
        read: false
    },
    {
        title: 'Book 4',
        genre: 'Science Fiction',
        author: 'Kitty Dogford',
        read: true
    },
    {
        title: 'Book 5',
        genre: 'Biography',
        author: 'Zerba Zerberson',
        read: false
    }
];

bookRouter.route('/')
    .get((req, res) => {
        res.render('books',
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

bookRouter.route('/single')
    .get((req, res) => {
        res.send('Hello, Single Book');
    });

export default bookRouter;