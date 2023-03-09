const User = require('./User');
const { Event } = require('./Events');

User.hasMany(Event, {
    foreignKey: 'user_id'
});

Event.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Event}