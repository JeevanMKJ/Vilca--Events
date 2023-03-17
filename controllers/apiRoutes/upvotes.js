const router = require('express').Router();
const { Event } = require('../../models');
const sequelize = require('sequelize')

router.put('/:id', async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
