
export function orderByName(data) {
   return data = data.sort(function(a, b) {
        if(a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
};

export function orderByNameDesc(data) {
    return data = data.sort(function(a, b) {
         if(a.name > b.name) {
             return -1;
         }
         if (a.name < b.name) {
             return 1;
         }
         return 0;
     })
 };

export function createJson(data1, data2) {
    data1.types = data2
    return data1;
};

export const paginator = (arg1 = 0, arg2 = []) => {
    if(arg1 === 0)
    return arg2.slice(arg1, arg1 +9)
    else
    return arg2.slice(arg1, arg1+12)
};

export const newPokemon = {
    name: "",
    hp: undefined,
    attack: undefined,
    defense: undefined,
    speed: undefined,
    height: undefined,
    weight: undefined,
    img: '',
    types: ''
};

// export const onFilter = (target={}, dispatch=function(){}, filterPokemons=function(){}, pokemons=[]) => {

//     switch(target['value']) {

//         case 'created': {
//             const poke = pokemons.filter(e=>e.id.length > 4)
//             dispatch(filterPokemons(poke))
//             break;
//         }
//         case 'existing': {
//             const poke = pokemons.filter(e=> e.id > 0 || e.id < 2000)
//             dispatch(filterPokemons(poke))
//             break;
//         }
//         case 'clean': {
//             dispatch(filterPokemons(pokemons))
//             break;
//         }
//         default: {
//             const poke = pokemons.filter(e=>e.types.includes(target['value']))
//             dispatch(filterPokemons(poke))
//         }
//     }
// };