'use strict';

import express from 'express';

const app = express();
const bookRouter = express.Router();

let port = process.env.PORT || 5000;
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

app.use(express.static('./public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

bookRouter.route('/')
    .get((req, res) => {
        res.render('books',
        {
            title: 'Hello from render',
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

app.use('/Books', bookRouter);
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello from render',
        nav:
        [{
            Link: '/books',
            Text: 'Books'
        },
        {
            Link: '/authors',
            Text: 'Authors'
        }]
    });
});

app.listen(port, (err) => console.log(`running server on port ${port}`));
