const router = require('express').Router();

const userRoutes = require('./userRoutes');
const handleEventRoutes = require('./handleEventRoutes');
const upvotes = require('./upvotes');
const saveEvent = require('./savedEvent')

router.use('/users', userRoutes);
router.use('/events', handleEventRoutes);
router.use('/upvotes', upvotes);
router.use('/savedEvent', saveEvent);

module.exports = router;
