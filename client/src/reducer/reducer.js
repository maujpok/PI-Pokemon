const initialState = {
    pokemons: [],
    pokemonCreated: [],
    pokemonLoaded: []
};

const rootReducer = (state = initialState, action) => {
    
    if(action.type === "ADD_ITEMS") {
        return {
            ...state,
            pokemons: action.payload
        }
    }

    if(action.type === "CREATE") {
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

    else return state
};

export default rootReducer;