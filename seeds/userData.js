const { User } = require('../models');

const userData = [
  {
    firstName: 'first',
    lastName: 'last',
    username: 'firstUser',
    email: 'email@email.com',
    password: 'password',
  },
  {
    firstName: 'firstpractice',
    lastName: 'lastpractice',
    username: 'secondUser',
    email: 'email2@email.com',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers();
