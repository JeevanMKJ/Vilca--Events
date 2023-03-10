const router = require('express').Router();
const userRoutes = require('./userRoutes');
const handleEventRoutes = require('./handleEventRoutes');

router.use('/users', userRoutes);
router.use('/events', handleEventRoutes);

module.exports = router;
