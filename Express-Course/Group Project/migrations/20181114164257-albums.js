'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'albums',
        'YearReleased',
        Sequelize.INTEGER,
        {
          allowNull: true
        }
      )
    ];
  },

  down: (queryInterface, Sequelize) => {
    return [queryInterface.removeColumn('albums', 'YearReleased')];
  }
};