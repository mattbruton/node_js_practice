import express from 'express';
const mongodb = require('mongodb').MongoClient;
const authRouter = express.Router();

let router = (nav) => {
    authRouter.route('/signUp')
        .post((req, res) => {
            console.log(req.body);
        });
    return authRouter;
};

module.exports = router;