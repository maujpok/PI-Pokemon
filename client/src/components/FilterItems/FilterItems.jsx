import React from "react";
import { connect, useDispatch } from "react-redux";
import { cleanFilters, filterAPI, filterCreated, filterType } from "../../actions/actions";



function FilterItems({types}){

    const dispatch = useDispatch();
    
    const onFilter = ({target}) => {

        switch(target.value) {
            case 'created': {
                dispatch(filterCreated());
                break;
            }
            case 'existing': {
                dispatch(filterAPI())
                break;
            }
            case 'clean': {
                dispatch(cleanFilters())
                break;
            }
            default: {
                dispatch(filterType(target.value))
            }
        }
    };

    return (
        <>  
            <label htmlFor="Filter">  Filter </label>
            <select 
            id="filter" 
            onClick={e => onFilter(e)}>
                <optgroup label='By Creator' selected>
                    <option value="existing">Existing Pokemons</option>
                    <option value="created">Created Pokemons</option>
                </optgroup>
                <optgroup label='By Type'>
                        {
                            types.map( ({id, name}) => (
                                <option 
                                key={id}
                                value={name}
                                >{name}</option>
                            ))
                        }
                </optgroup>
            </select>
            <button value='clean' onClick={e => onFilter(e)}>Clean</button>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        types: state.types
    }
};

export default connect(mapStateToProps, {})(FilterItems);