'use strict';
module.exports = (sequelize, DataTypes) => {
  const tracks = sequelize.define(
    'tracks',
    {
      TrackId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      Name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      AlbumId: DataTypes.INTEGER,
      MediaTypeId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      GenreId: DataTypes.INTEGER,
      Composer: DataTypes.STRING,
      Milliseconds: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      Bytes: DataTypes.INTEGER,
      UnitPrice: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      Deleted: DataTypes.BOOLEAN
    },
    {
      timestamps: false
    }
  );
  tracks.associate = function(models) {
    tracks.belongsTo(models.albums, {
      foreignKey: 'AlbumId'
    });
  };

  return tracks;
};