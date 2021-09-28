const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// let id = 2000;

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    idPokemon: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      // unique: true,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    heigth: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.JSON
    }
  })
};




