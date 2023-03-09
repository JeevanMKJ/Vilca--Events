const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedEvents = require('./eventData');

const seedAll = async () => {
  await sequelize.sync({ force: false });

  await seedEvents();

  await seedUsers();

  process.exit(0);
};

seedAll();
