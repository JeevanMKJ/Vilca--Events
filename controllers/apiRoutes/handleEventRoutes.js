const router = require('express').Router();
const { User } = require('../../models');
// post to create evnet
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
