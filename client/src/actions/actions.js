
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
            dispatch(loadPokemons(items))
        })
    }
};

function loadPokemons (items) {
    return {
        type: "ADD_ITEMS",
        payload: items
    }
};

export function getName(name) {
    return function(dispatch) {
        // console.log(name)
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

export function sendData(data) {
    return function (dispatch) {
        console.log(JSON.stringify(data), 'fn fetch');
        fetch('http://localhost:3001/pokemons',{
            method: "POST",
            body: JSON.stringify(data),
            headers: {'Content-Type' : 'application/json'}
        })
        .then(() => dispatch(saveData()))
    }
};

function saveData() {
    return {
        type: "SAVED",
    }
};


export function getTypes(){
    return function(dispatch){
        fetch('http://localhost:3001/types')
        .then(res => res.json())
        .then(data => dispatch(addTypes(data)))
    }
};

function addTypes(types){
    return {
        type: "ADD_TYPES",
        payload: types
    }
};

export function searchName (name) {
    return function (dispatch) {
        fetch(`http://localhost:3001/pokemons?name=${name}`)
            .then(res => res.json())
            .then(data => {
                dispatch(foundSuccess(data))
            })
            .catch(error => {
                // console.log(error)
                dispatch(foundFailure("Not found"))
            })
    }
};

function foundSuccess (data) {
    return {
        type: "FOUND",
        payload: data
    }
};

function foundFailure (err) {
    return {
        type: "NOT_FOUND",
        payload: err
    }
};

export function cleanSearchResult(dispatch) {
        dispatch({type: "CLEAN"})
};