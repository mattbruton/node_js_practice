'use strict';

import express from 'express';

const app = express();

let port = process.env.PORT || 5000;

app.use(express.static('./public'));
app.use(express.static('./src/views'));

app.get('/', (req, res) => {
    res.send('here is some text');
});

app.get('/books', (req, res) => {
    res.send('here are some books');
});

app.listen(port, (err) => console.log(`running server on port ${port}`));
