module.exports = (sequelize, DataTypes) => {
    const Poporders = sequelize.define("orders", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'users',
          key: 'username'
        }
      },
      order_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
      }
    }, {
      timestamps: false, // to avoid the automatic creation of createdAt and updatedAt fields
      tableName: 'orders'
    });
  
    return Poporders;
  };
  