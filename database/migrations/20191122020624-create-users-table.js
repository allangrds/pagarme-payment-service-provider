module.exports = {
  up: (queryInterface, DataTypes) => (
    queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      api_key: {
        allowNull: false,
        type: DataTypes.UUID,
        unique: true,
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
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  ),

  down: queryInterface => (
    queryInterface.dropTable('Users')
  ),
}
