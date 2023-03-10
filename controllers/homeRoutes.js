// get redirect to handle events
const router = require('express').Router();
const { Event, User } = require('../models');

// get to request all events from db
router.get('/', async (req, res) => {
  try {
    const dbEventData = await Event.findAll();

    const events = dbEventData.map((event) => event.get({ plain: true }));
    console.log(events);
    res.render('homepage', {
      events,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get request event by id
router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const event = eventData.get({ plain: true });

    res.render('event', {
      ...event,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

router.get('/create', (req, res) => {
  res.render('handleEvent', { loggedIn: req.session.loggedIn });
});

module.exports = router;
