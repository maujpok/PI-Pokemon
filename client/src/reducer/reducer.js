const initialState = {
    pokemons: [],
    pokemonCreated: [],
    pokemonLoaded: [],
    search: {found:[], loading: false, notfound: ''},
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

    if(action.type === "SEARCHING") {
        return {
            ...state,
            search: {
                loading: true,
                found: [],
                notfound: ''
            }
        }
    }

    if(action.type === "NOT_FOUND") {
        return {
            ...state,
            search: {
                loading: false,
                found: [],
                notfound: action.payload
            }
        }
    }

    if(action.type === "FOUND") {
        return {
            ...state,
            search: {
                loading: false,
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

    if(action.type === "NAME:EXIST") {
        return {
            ...state,
            
        }
    }

    else return state
};

export default rootReducer;