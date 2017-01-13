"use strict";

const EXPRESS = require('express');

const APP = EXPRESS();

let port = 5000;

APP.listen(port, (err) => console.log(`running server on port ${port}`));
