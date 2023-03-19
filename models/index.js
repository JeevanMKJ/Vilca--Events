const User = require('./User');
const Event = require('./Event');
const SavedEvent = require('./SavedEvent');

User.hasMany(Event, {
  foreignKey: 'user_id',
});

Event.belongsTo(User, {
  foreignKey: 'event_id',
});

// CREATE TABLE Student_Course (
//   student_id INT NOT NULL,
//   course_id INT NOT NULL,
//   PRIMARY KEY (student_id, course_id),
//   FOREIGN KEY (student_id) REFERENCES Student(id),
//   FOREIGN KEY (course_id) REFERENCES Course(id)
// );

SavedEvent.hasMany(User, {
  foreignKey: 'user_id',
});

SavedEvent.hasMany(Event, {
  foreignKey: 'event_id',
});

// Event.hasMany(SavedEvent, {
//   foreignKey: 'event_id',
// });

// User.hasMany(SavedEvent, {
//   foreignKey: 'user_id',
// });

// // SavedEvent.hasMany(User, {
// //   foreignKey: 'savedEvent_id',
// // });

// // SavedEvent.hasMany(Event, {
// //   foreignKey: 'savedEvent_id',
// // });




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
