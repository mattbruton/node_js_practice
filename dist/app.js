'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 5000;

app.use(_express2.default.static('./public'));
app.use(_express2.default.static('./src/views'));

app.get('/', function (req, res) {
    res.send('here is some text');
});

app.get('/books', function (req, res) {
    res.send('here are some books');
});

app.listen(port, function (err) {
    return console.log('running server on port ' + port);
});