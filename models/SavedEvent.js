const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../config/connection');

class SavedEvent extends Model {}

SavedEvent.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      references: {
        model: 'event',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'savedEvent',
  }
);

module.exports = SavedEvent;
