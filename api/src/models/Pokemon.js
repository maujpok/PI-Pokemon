const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// let id = 2000;

module.exports = (sequelize) => {
  // defino el modelo
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
      },
      validate: {
        is: /^[a-z]+$/i
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    img: {
      type: DataTypes.JSON
    }
  }, {
    timestamps: false
  })
};




