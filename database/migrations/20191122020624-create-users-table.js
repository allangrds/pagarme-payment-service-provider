const uuidv4 = require('uuid/v4')

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      api_key: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
