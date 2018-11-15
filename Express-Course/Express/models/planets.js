'use strict';
module.exports = (sequelize, DataTypes) => {
  var planets = sequelize.define(
    'planets',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      numberOfMoons: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  planets.associate = function(models) {
    // associations can be defined here
  };

  return planets;
};