const router = require('express').Router();

const { Event } = require('../../models');
const withAuth = require('../../utils/auth');
// post to create event
router.post('/add-event', withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      image: req.body.event_image,
      title: req.body.event_title,
      date: req.body.date,
      time: req.body.time,
      description: req.body.description,
      location: req.body.location,
      email: req.body.email,
      social: req.body.social,
      user_id: req.session.user_id,
    });
    if (
      newEvent.image &&
      newEvent.title &&
      newEvent.date &&
      newEvent.time &&
      newEvent.description &&
      newEvent.location &&
      newEvent.email &&
      newEvent.social &&
      newEvent.user_id
    ) {
      return res.status(200).json(newEvent);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// update to update event
router.put('/:id', async (req, res) => {
  try {
    const userData = await Event.update(
      {
        image: req.body.image,
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        location: req.body.location,
        email: req.body.email,
        social: req.body.social,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );
    if (!userData[0]) {
      res.status(404).json({ message: 'No event with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete to delete event
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event with this id exists' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
