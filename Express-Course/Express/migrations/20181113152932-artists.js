'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('artists', 'DateFormed', Sequelize.INTEGER, {
        allowNull: true
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn('artists', 'DateFormed')];
  }
};