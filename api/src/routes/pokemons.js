var express = require('express');
var router = express.Router();
const { Pokemon, Type } = require('../db.js');
const fetch = require('cross-fetch');
const { response } = require('express');
const url = `https://pokeapi.co/api/v2/pokemon`;
const url_image = 'https://github.com/maujpok/PI-Pokemon/blob/master/pokemon.png';

module.exports = router;

router.get('', async (req, res) => {
//obtener listado pokemons desde api
// solo datos necesarios para ruta principal (img, name, type)
try {
    fetch(url)
    .then(response => response.json())
    .then(data => res.send(data.results))
}catch(e){
    res.sendStatus(400);
}
});

router.get('/:idPokemon', async (req, res) => {
//obtener detalle pokemon segun id
// solo datos pedidos en ruta detalle pokemon
// funcionar tanto para id de api como para id de bbdd
    const {idPokemon} = req.params;

    try{
        if(idPokemon.length > 4) {
            await Pokemon.findByPk(idPokemon, {include: Type})
            .then(data => {
                const pokemonBd = {
                    name: data.name,
                    img: data.img,
                    types: data.types.map(e => {
                        return e.name
                    })
                }
                res.send(pokemonBd);
            })

        } else {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
            .then(response => response.json())
            .then(data => {
                const pokemonApi = {
                    name: data.name,
                    img: data.sprites.other.dream_world.front_default,
                    types: data.types.map(e => {
                        return e.type.name
                    })
                }
                res.json(pokemonApi);
            })
        }
    }catch(e){
        res.status(500).send("That Pokemon doesn't exists");
    }
});

router.get('', (req, res) => {
//obtener pokemon que nombre pasado por query coincida exacto
// mostrar mensaje adecuado en caso de no existir ninguno
    const {name} = req.query;

});

router.post('', async (req, res) => {
// recibe datos del form de la ruta de creacion de pokemons
// crea un pokemon en la bbdd
    const {name, hp, attack, defense, speed, heigth, weight, types} = req.body;

    try{        
        const [pokemon, created] = await Pokemon.findOrCreate({
            where: {name: name},
            defaults: {
                name,
                hp,
                attack,
                defense,
                speed,
                heigth,
                weight,
                img: url_image
            }
        });

        await pokemon.addTypes(types);

        if(created) {
            res.send(pokemon);
        } else {
            res.send("Your pokemon already exists");
        }

    }catch(e){
        res.status(500).send("You must enter a valid name (only letters)");
    }
});