// get redirect to handle events
const router = require('express').Router();
const { Event } = require('../models');

// get to request all events from db
router.get('/', async (req, res) => {
    try {
        const dbEventData = await Event.findAll({
            include: [
                {
                    model: Event,
                    attributes: ['title', 'image', 'date'],
                },
            ],
        });

        const events = dbEventData.map((events) =>
            events.get({ plain: true })
        );

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
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // If the user is logged in, allow them to view the event
        try {
            const dbEventData = await Event.findByPk(req.params.id);

            const event = dbEventData.get({ plain: true });

            res.render('event', { event, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
