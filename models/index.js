const User = require('./User');
const Event = require('./Event');
const SavedEvent = require('./SavedEvent');

User.hasMany(Event, {
  foreignKey: 'user_id',
});

Event.belongsTo(User, {
  foreignKey: 'event_id',
});

SavedEvent.hasMany(User, {
  foreignKey: 'user_id',
});

SavedEvent.hasMany(Event, {
  foreignKey: 'event_id',
});

Event.belongsToMany(User, {
  through: {
    model: SavedEvent,
  },
  foreignKey: 'event_id',
});

User.belongsToMany(Event, {
  through: {
    model: SavedEvent,
  },
  foreignKey: 'user_id',
});

module.exports = { User, Event, SavedEvent };
