const router = require('express').Router();
const { apiRoutes } = require('./api');

router.use('/api', apiRoutes);

router.use((res, req) => {
    return res.status(404).json('Not found');
});

module.exports = router;