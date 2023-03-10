const router = require('express').Router();
const { Event } = require('../../models');
// post to create event
router.post('/add-event', async(req, res) => {
    try {
        const newEvent = await Event.create({
            ...req.body,
            user_id: req.sessionStore.user_id,
        });

        res.status(200).json(newEvent);
    } catch(err) {
        res.status(400).json(err);
    }
});
// update to update event

// delete to delete event
router.delete(':/id', async (req, res) => {
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!eventData) {
            res.status(404).json({ message: 'No event with this id exists'});
            return;
        }

        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
module.exports = Event;
