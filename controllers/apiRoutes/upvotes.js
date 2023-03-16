const router = require('express').Router();
const { User, Event } = require('../../models');
const sequelize = require('sequelize')

router.put('/:id', async (req, res) => {
  try {
    // const event = await Event.findByPk(req.params.id, {
    // });
    // console.log(event.upvotes);

    // let upvote = event.upvotes;
    // if (req.body && req.params.id) {
    //   console.info(`${req.method} request received to upvote an event`);
    const updateUpvote = await Event.update(
      { upvotes: sequelize.literal('upvotes + 1') },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!updateUpvote) {
      res.status(404).json({ message: 'not working' });
      return;
    }
    res.status(200).json(updateUpvote);
    //   for (let i = 0; i < events.length; i++) {
    //     const currentEvent = events[i];
    //     if (currentEvent.id === id) {
    //       currentEvent.upvote += 1;
    //       res.status(200).json(`New upvote count is: ${currentEvent.upvotes}!`);
    //       return;
    //     }
    //   }

    // if (req.body && req.params.id) {
    //   console.info(`${req.method} request received to upvote an event`);
    //   const { id } = req.params;
    //   for (let i = 0; i < events.length; i++) {
    //     const currentEvent = events[i];
    //     if (currentEvent.id === id) {
    //       currentEvent.upvote += 1;
    //       res.status(200).json(`New upvote count is: ${currentEvent.upvotes}!`);
    //       return;
    //     }
    //   }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
