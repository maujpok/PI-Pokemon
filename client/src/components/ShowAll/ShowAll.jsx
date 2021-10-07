import React, { useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon";
import { connect } from "react-redux";
import './ShowAll.css';
import { fetchApi } from "../../actions/actions";

function ShowAll({pokemons, fetchApi}) {

    useEffect(() => {
        fetchApi()
    },[fetchApi]);

    return (
        <div className='showall'>
        {pokemons.map(e => 
            <Pokemon
                key={e.id}
                id={e.id}
                name={e.name}
                types={e.types}
                img={e.img}/>
                )}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
};

export default connect (mapStateToProps, {fetchApi})(ShowAll);