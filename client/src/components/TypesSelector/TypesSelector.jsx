import React, { useState } from "react";
import { connect } from "react-redux";
import { orderByName } from "../../helpers";
import "./TypesSelector.css";


function TypesSelector({types}) {

    orderByName(types);
    
    const [_types, setTypes] = useState([]);

    function handleChange(e) {
        let value = e.target.value;
        _types.includes(value) ?
        setTypes(_types.filter(e => e !== value))
        :
        setTypes([..._types, e.target.value])
    };

    function onSubmit(){
        console.log("submiteado")
    }
    
    return(
        <div id='container' onSubmit={onSubmit}>
            <b>Select type/s</b>
            <div id='types'>
            {
                types.map(e => (
                    <div key={e.id} id='unit'>
                        <input
                        type="checkbox"
                        value={e.id}
                        onClick={handleChange}
                        />
                        <span id='names'>{e.name}</span>
                    </div>
                ))
            }
            </div>
        </div>  
    )
};

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemonCreated
    }
};

export default connect(mapStateToProps)(TypesSelector);