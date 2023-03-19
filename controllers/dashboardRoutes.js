const router = require('express').Router();
const { Event, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const myEventData = await Event.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });
    const myEvents = myEventData.map((events) => events.get({ plain: true }));
    const { loggedIn } = req.session;
    if (loggedIn) {
      res.render('dashboard', {
        myEvents,
        loggedIn: req.session.loggedIn,
      });
      return;
    }
    res.render('login');
  } catch (err) {
    console.log(err);
  }
});

router.get('/', (req, res) => {
  res.render('dashboard', { loggedIn: req.session.loggedIn });
});

module.exports = router;
