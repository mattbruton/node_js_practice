'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 5000;
var bookRouter = _express2.default.Router();

app.use(_express2.default.static('./public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

bookRouter.route('/').get(function (req, res) {
    res.render('books', {
        title: 'Hello from render',
        nav: [{
            Link: '/books',
            Text: 'Books'
        }, {
            Link: '/authors',
            Text: 'Authors'
        }]
    });
});

bookRouter.route('/single').get(function (req, res) {
    res.send('Hello, Single Book');
});

app.use('/Books', bookRouter);
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/books',
            Text: 'Books'
        }, {
            Link: '/authors',
            Text: 'Authors'
        }]
    });
});

app.listen(port, function (err) {
    return console.log('running server on port ' + port);
});