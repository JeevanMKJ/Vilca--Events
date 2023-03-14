const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./apiRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
