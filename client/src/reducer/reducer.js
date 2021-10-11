const initialState = {
    pokemons: [],
    pokemonsCopy: [],
    pokemonLoaded: [],
    search: {found:[], loading: false, notfound: ''},
    types: []
};

const rootReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADD_ITEMS": return {
            ...state,
            pokemons: action.payload,
        }
        case "COPY": return {
            ...state,
            pokemonsCopy: action.payload
        }
        case "SAVED": return {
            ...state,
            pokemonCreated: action.payload,
        }
        case "LOAD_POKEMON": return {
            ...state,
            pokemonLoaded: action.payload
        }
        case "ADD_TYPES": return {
            ...state,
            types: action.payload
        }
        case "SEARCHING": return {
            ...state,
            search: {
                loading: true,
                found: [],
                notfound: ''
            }
        }
        case "NOT_FOUND": return {
            ...state,
            search: {
                loading: false,
                found: [],
                notfound: action.payload
            }
        }
        case "FOUND": return {
            ...state,
            search: {
                loading: false,
                found: [action.payload],
                notfound: ""
            }
        }
        case "CLEAN": return {
            ...state,
            search: {
                found: [],
                notfound: ""
            }
        }
        case "FILTER_CREATED": return {
            ...state,
            pokemonsCopy: state.pokemons.filter(e => e.id.length > 4)
        }
        case "FILTER_API": return {
            ...state,
            pokemonsCopy: state.pokemons.filter(e => e.id < 2000)
        }
        case "FILTER_TYPE": return {
            ...state,
            pokemonsCopy: state.pokemons.filter(e => e.types.includes(action.payload))
        }
        case "CLEAN_FILTERS": return {
            ...state,
            pokemonsCopy: state.pokemons
        }
        case "NAME_ASC": return {
            ...state,
            pokemonsCopy: state.pokemonsCopy.sort(function (a,b) {
                if(a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            })
        }
        case "NAME_DESC": return {
            ...state,
            pokemonsCopy: state.pokemonsCopy.sort(function (a,b) {
                if(a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
            })
        }
        case "ORDER_ATTACK_ASC": return {
            ...state,
            pokemonsCopy: state.pokemonsCopy.sort(function(a,b) {
                if(a.attack > b.attack) return 1;
                if (a.attack < b.attack) return -1;
                return 0;
            })
        }
        case "ORDER_ATTACK_DESC": return {
            ...state,
            pokemonsCopy: state.pokemonsCopy.sort(function(a,b) {
                if(a.attack > b.attack) return -1;
                if (a.attack < b.attack) return 1;
                return 0;
            })
        }
        case "DEFAULT": return {
            ...state,
            pokemonsCopy: state.pokemons
        }

        default: return state;
    }
};

export default rootReducer; 