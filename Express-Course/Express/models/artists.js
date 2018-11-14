'use strict';
module.exports = (sequelize, DataTypes) => {
  const artists = sequelize.define(
    'artists',
    {
      ArtistId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: DataTypes.STRING,
      DateFormed: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  return artists;
};