'use strict';

import express from 'express';

const app = express();

let port = process.env.PORT || 5000;

app.use(express.static('./public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Hello from render!',list: [1,2,3,4]});
});

app.get('/books', (req, res) => {
    res.send('here are some books');
});

app.listen(port, (err) => console.log(`running server on port ${port}`));
