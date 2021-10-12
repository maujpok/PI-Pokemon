import React from "react";
import { connect, useDispatch } from "react-redux";
import { fetchApi, filterItems } from "../../actions/actions";
import { fromAtoZ } from "../../helpers";

function FilterItems({types}) {

    const dispatch = useDispatch();

    return (
        <>  
            <label htmlFor="Filter">  Filter </label>
            <select 
            id="filter" 
            onChange={e => dispatch(filterItems(e.target.value))}>
                <optgroup label='By Creator' selected>
                    <option value="created">Created Pokemons</option>
                    <option value="existing">Existing Pokemons</option>
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
            <button value='clean' onClick={e => dispatch(fetchApi())}>Clean</button>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        types: state.types.sort(fromAtoZ)
    }
};

export default connect(mapStateToProps, {})(FilterItems);