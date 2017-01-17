'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bookRoutes = require('./routes/bookRoutes');

var _bookRoutes2 = _interopRequireDefault(_bookRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 5000;

app.use(_express2.default.static('./public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', _bookRoutes2.default);

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