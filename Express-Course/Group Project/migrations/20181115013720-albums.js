'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('albums', 'Deleted', Sequelize.BOOLEAN, {
        allowNull: true
      })
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn('albums', 'Deleted')];
  }
};