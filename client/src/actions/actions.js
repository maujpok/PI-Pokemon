
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
                    attack: e.attack,
                    types: e.types.join(' ')
                }
            })
            dispatch(loadPokemons(items))
            dispatch({type: "COPY", payload: items})
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
        fetch(`http://localhost:3001/pokemons?name=${name}`)
            .then(res => res.json())
            .then(data => {
                data.types = data.types.join(' ')
                dispatch(loadPokemon(data))
            })
        }
};

function loadPokemon(data) {
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
        dispatch(searchingData())
        fetch(`http://localhost:3001/pokemons?name=${name}`)
            .then(res => res.json())
            .then(data => {
                dispatch(foundSuccess(data))
            })
            .catch(error => {
                dispatch(foundFailure("Not found"))
            })
    }
};

function searchingData() {
    return {
        type: "SEARCHING"
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

export function filterCreated() {
    return {
        type: "FILTER_CREATED"
    }
};

export function filterAPI() {
    return {
        type: "FILTER_API"
    }
};

export function filterType(data) {
    return {
        type: "FILTER_TYPE",
        payload: data
    }
};

export function cleanFilters() {
    return {
        type: "CLEAN_FILTERS"
    }
};

export function orderNameAsc() {
    return {
        type: "NAME_ASC"
    }
}; 

export function orderNameDesc() {
    return {
        type: "NAME_DESC"
    }
};

export function orderAttackAsc() {
    return {
        type: "ORDER_ATTACK_ASC"
    }
};

export function orderAttackDesc() {
    return {
        type: "ORDER_ATTACK_DESC"
    }
};

export function orderDefault() {
    return {
        type: "DEFAULT"
    }
};