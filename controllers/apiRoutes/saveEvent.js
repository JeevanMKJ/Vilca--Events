const router = require('express').Router();
const { SavedEvent } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  // creates a saved event
  try {
    const tagData = await SavedEvent.create({
      user_id: req.session.user_id,
      event_id: req.body.event_id,
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
