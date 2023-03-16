// id, event_image, event_title, event_date, event_time, event_description, event_location, event_contact_email, event_contact_social, user_id
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Event extends Model {}
// event_image & event_location refer to MOdule 14, Ex. 14-MVC

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: false,
      validate: {
        isEmail: true,
      },
    },
    social: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    upvotes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'events',
  }
);

module.exports = Event;
