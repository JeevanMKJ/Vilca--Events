// get redirect to handle events
const router = require('express').Router();
const sequelize = require('sequelize');
const { Event, User, SavedEvent } = require('../models');
const withAuth = require('../utils/auth');

// get to request all events from db
router.get('/', async (req, res) => {
  try {
    const dbEventData = await Event.findAll({
      order: sequelize.literal('upvotes DESC'),
    });

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
router.get('/event/:id', withAuth, async (req, res) => {
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

router.get('/create', withAuth, (req, res) => {
  res.render('handleEvent', { loggedIn: req.session.loggedIn });
});

router.get('/savedEvents', async (req, res) => {
  try {
    const mySavedEventData = await SavedEvent.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['id'],
        },
        {
          model: Event,
          attributes: [
            'id',
            'image',
            'title',
            'date',
            'time',
            'description',
            'location',
            'email',
            'social',
          ],
        },
      ],
    });
    const mySavedEvents = mySavedEventData.map((events) =>
      events.get({ plain: true })
    );
    console.log(mySavedEvents);
    const { loggedIn } = req.session;
    if (loggedIn) {
      res.render('savedEvents', {
        mySavedEvents,
        loggedIn: req.session.loggedIn,
      });
      return;
    }
    res.render('login');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
