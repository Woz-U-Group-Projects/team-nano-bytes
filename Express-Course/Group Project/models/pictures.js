'use strict';
module.exports = (sequelize, DataTypes) => {
  const pictures = sequelize.define(
    'pictures',
    {
      PictureId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Author: DataTypes.STRING,
      Url: DataTypes.STRING,
    },
    {
      timestamps: false
    }
  );
  return pictures;
};