const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.


module.exports = (sequelize) => {
  
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value) {
        this.setDataValue('name', value.toLowerCase());
      }
    },
    hp: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    attack: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    defense: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    speed: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    height: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    weight: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    img: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: false
  })
};




