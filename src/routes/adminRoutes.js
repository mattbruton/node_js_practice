import express from 'express';

const adminRouter = express.Router();

const router = (nav) => {

    adminRouter.route('/addBooks')
        .get((req, res) => {
            res.send('inserting books...');
        });

    return adminRouter;
};

module.exports = router;