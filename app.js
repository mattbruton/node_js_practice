'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    session = require('express-session'),
    nav = require('./src/misc/nav');

const bookRouter = require('./src/routes/bookRoutes')(nav),
    adminRouter = require('./src/routes/adminRoutes')(nav),
    authRouter = require('./src/routes/authRoutes')(nav);

const app = express();

let port = process.env.PORT || 5000;

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'bigSecret', saveUninitialized: true, resave: true}));
require('./src/config/passport.js')(app);

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

app.listen(port, err => console.log(`running server on port ${port}`));
