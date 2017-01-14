"use strict";

const EXPRESS = require('express');

const APP = EXPRESS();

let port = 5000;

APP.get("/", (req, res) => {
    res.send("here's some text");
});

APP.get("/books", (req, res) => {
    res.send("here's some books");
});

APP.listen(port, (err) => console.log(`running server on port ${port}`));
