const router = require('express').Router();

const userRoutes = require('./userRoutes');
const handleEventRoutes = require('./handleEventRoutes');
const upvotes = require('./upvotes');

router.use('/users', userRoutes);
router.use('/events', handleEventRoutes);
router.use('/upvotes', upvotes)

module.exports = router;
