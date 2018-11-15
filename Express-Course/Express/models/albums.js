'use strict';
module.exports = (sequelize, DataTypes) => {
  const albums = sequelize.define(
    'albums',
    {
      AlbumId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Title: DataTypes.STRING,
      ArtistId: DataTypes.INTEGER,
      YearReleased: DataTypes.INTEGER,
      Deleted: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );
  albums.associate = function(models) {
    albums.belongsTo(models.artists, {
      foreignKey: 'ArtistId'
    });
    albums.hasMany(models.tracks, {
      foreignKey: 'AlbumId'
    });
  };

  return albums;
};