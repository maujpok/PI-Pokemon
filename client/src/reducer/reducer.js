const initialState = {
    pokemons: [],
    pokemonCreated: [],
    pokemonLoaded: [],
    search: {found:[], notfound: ''},
    types: []
};

const rootReducer = (state = initialState, action) => {
    
    if(action.type === "ADD_ITEMS") {
        return {
            ...state,
            pokemons: action.payload
        }
    }

    if(action.type === "SAVED") {
        return {
            ...state,
            pokemonCreated: action.payload
        }
    }

    if(action.type === "LOAD_POKEMON") {
        return {
            ...state,
            pokemonLoaded: action.payload
        }
    }

    if(action.type === "ADD_TYPES") {
        return {
            ...state,
            types: action.payload
        }
    }

    if(action.type === "NOT_FOUND") {
        return {
            ...state,
            search: {
                found: [],
                notfound: action.payload
            }
        }
    }

    if(action.type === "FOUND") {
        return {
            ...state,
            search: {
                found: [action.payload],
                notfound: ""
            }
        }
    }

    if(action.type === "CLEAN") {
        return {
            ...state,
            search: {
                found: [],
                notfound: ""
            }
        }
    }

    else return state
};

export default rootReducer;