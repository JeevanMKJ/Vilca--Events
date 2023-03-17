const router = require('express').Router();
const { User } = require('../../models');

// POST Route to signup

router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log(
        'Email validation error:',
        'Please enter a valid email address.'
      );
      return res
        .status(400)
        .json({ message: 'Please enter a valid email address.' });
    }

    // Password validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
      console.log(
        'Password validation error:',
        'Password must contain at least 8 characters, including uppercase, lowercase, and special symbols.'
      );
      return res.status(400).json({
        message:
          'Password must contain at least 8 characters, including uppercase, lowercase, and special symbols.',
      });
    }
    const dbUserData = await User.create({
      username,
      email,
      password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    if (err.errors[0].path === 'password') {
      return res.status(400).json({ message: err.errors[0].message });
    }
    res.status(500).json({ message: 'Failed to create user.', error: err });
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
    console.log(selectUser);
    if (!selectUser) {
      return res.status(404).json({
<<<<<<< HEAD
<<<<<<< HEAD
        message: 'Incorrect input. Please Try again',
        // message: "This user does not exist! Please create a new account",
        // edit this err message to be more specific.
        // ---> message: "Incorrect input. Please Try again"
=======
        message: "Incorrect input. Please Try again",
>>>>>>> 6baf0781c6fe041e3ba0e0b1d0ef9ee4ec25a068
=======

        message: "Incorrect input. Please Try again",

>>>>>>> 95180784fa637230de2bb059b2b41e9420c025fd
      });
    }

    const isValidPassword = await selectUser.checkPassword(req.body.password);

    if (!isValidPassword) {
<<<<<<< HEAD
<<<<<<< HEAD
      return res.status(404).json({ message: 'Wrong password' });
=======
      return res.status(404).json({ message: "Please try again." });
>>>>>>> 6baf0781c6fe041e3ba0e0b1d0ef9ee4ec25a068
=======

      return res.status(404).json({ message: "Please try again." });

>>>>>>> 95180784fa637230de2bb059b2b41e9420c025fd
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = selectUser.id;
      req.session.username = selectUser.username;
      return res.status(200).json({ message: 'You are now logged in!' });
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
