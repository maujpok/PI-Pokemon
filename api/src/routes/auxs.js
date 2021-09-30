const url_Base = `https://pokeapi.co/api/v2/pokemon`;
const url_40Items = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';
const url_image = 'https://github.com/maujpok/PI-Pokemon/blob/master/pokemon.png';
const { Pokemon, Type } = require('../db.js');
const fetch = require('cross-fetch');


module.exports = {
    url_image,
    url_Base,
    url_40Items
}