export function fetchApi () {
    return function(dispatch) {
        fetch('http://localhost:3001/pokemons')
        .then(res => res.json())
        .then(data => {
            let items = data.map(e => {
                return {
                    id: e.id,
                    img: e.img,
                    name: e.name,
                    types: e.types
                }
            })
            dispatch(load(items))
        })
    }
};

export function load (items) {
    return {
        type: "ADD_ITEMS",
        payload: items
    }
};

export function createPoke (poke) {
    return {
        type: "CREATE",
        payload: poke
    }
};

export function getName(name) {
    return function(dispatch) {
        fetch(`http://localhost:3001/pokemons?name=${name}`)
        .then(res => res.json())
        .then(data => {
            dispatch(loadPokemon(data))
        });
    }
};

export function loadPokemon(data) {
    return {
        type: "LOAD_POKEMON",
        payload: data
    }
};