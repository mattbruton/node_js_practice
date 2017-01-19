'use strict';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
let port = process.env.PORT || 5000;
let nav = [
    {Link: '/books', Text: 'Books'},
    {Link: '/authors', Text: 'Authors'}
];

const bookRouter = require('./routes/bookRoutes')(nav);
const adminRouter = require('./routes/adminRoutes')(nav);
const authRouter = require('./routes/authRoutes')(nav);

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

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
