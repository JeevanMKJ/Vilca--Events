const router = require('express').Router();
const { User } = require('../../models');


// POST Route to signup 

router.post('/signup', async (req, res) => {
  try {
    const selectUser = await User.create(req.body);
    const newUser = selectUser.get({ plain: true });

    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(201).json(newUser);
    });
  } catch (error) {
    res.status(500).json({ message: 'An error has occured' });
  }
});

// POST Route to login

router.post('/login', async (req, res) => {
  try {
    const selectUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!selectUser) {
      return res
        .status(404)
        .json({ message: "This user does not exist! Please create a new account" });
    }

    const isValidPassword = await selectUser.comparePassword(req.body.password);

    if (!isValidPassword) {
      return res.status(404).json({ message: 'Wrong password' });
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      return res
        .status(200)
        .json({ message: "You are now logged in!" });
    });
  } catch (error) {
    return res.status(500).json({ message: 'An error has occured' });
  }
});


// POST route to logout

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
module.exports = User; 