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
      Name: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  artists.associate = function(models) {
    artists.hasMany(models.albums, {
      foreignKey: 'ArtistId'
    });
  };

  return artists;
};