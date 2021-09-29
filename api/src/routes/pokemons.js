var express = require('express');
var router = express.Router();
const { Pokemon, Type } = require('../db.js');
const fetch = require('cross-fetch');
const {response} = require('express');
// const url = `https://pokeapi.co/api/v2/pokemon`;
const url40 = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';
const url_image = 'https://github.com/maujpok/PI-Pokemon/blob/master/pokemon.png';


router.get('/', async (req, res) => {
// obtener listado pokemons desde api
// solo datos necesarios para ruta principal (img, name, type)
const {name} = req.query;
    
if(name) {
    try{
        await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            const poke = {
                id: data.id,
                name: data.name,
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
                img: data.sprites.other.dream_world.front_default,
                types: data.types.map(e => {
                    return e.type.name
                })
            }
            res.json(poke);
        })
    }catch(e){
        res.status(400).send('Name not exist')
    }
} else {
    try {
        const datos = await fetch(url40)
        .then(response => response.json())
        .then(data => data.results.map(async(e)=> {
            var data1 = await fetch(e.url)
            var data2 = await data1.json()
            return data2
        }));

        Promise.all(datos)
        .then(data => {
            const elements =
            data.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    hp: e.stats[0].base_stat,
                    attack: e.stats[1].base_stat,
                    defense: e.stats[2].base_stat,
                    speed: e.stats[5].base_stat,
                    height: e.height,
                    weight: e.weight,
                    img: e.sprites.other.dream_world.front_default,
                    types: e.types.map(e => {
                        return e.type.name
                    })
                }
            })
            res.send(elements)
        })
    }catch(e){
        res.status(500).send('Error en API')
        }
    }
});

router.get('/:idPokemon', async (req, res) => {
//obtener detalle pokemon segun id
// solo datos pedidos en ruta detalle pokemon
    const {idPokemon} = req.params;
    try{
        if(idPokemon.length > 4) {
            await Pokemon.findByPk(idPokemon, {include: Type})
            .then(data => {
                const pokemonBd = {
                    id: data.id,
                    name: data.name,
                    hp: data.hp,
                    attack: data.attack,
                    defense: data.defense,
                    speed: data.speed,
                    height: data.height,
                    weight: data.weight,
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
                    id: data.id,
                    name: data.name,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    height: data.height,
                    weight: data.weight,
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

router.post('', async (req, res) => {
// recibe datos del form de la ruta de creacion de pokemons
// crea un pokemon en la bbdd
    const {name, hp, attack, defense, speed, height, weight, types} = req.body;
    if(!name) {
        res.status(400).send("Should enter a name")
    } else {
        try{        
            const [pokemon, created] = await Pokemon.findOrCreate({
                where: {name: name},
                defaults: {
                    name,
                    hp,
                    attack,
                    defense,
                    speed,
                    height,
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
            res.status(400).send("The name isn't available. Maybe it's already in use, or you enter invalid characters(only letters).");
        }
    }
});


module.exports = router;