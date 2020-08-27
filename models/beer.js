module.exports = function(sequelize, DataTypes){
    return sequelize.define('beer', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brewery: {
        type: DataTypes.STRING,
        allowNull: false
      },
      abvibu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false
      },
      comments: {
          type: DataTypes.STRING(2000),
          allowNull: false,
      },
      owner: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
  }