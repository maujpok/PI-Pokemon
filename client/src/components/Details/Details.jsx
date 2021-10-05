import React, { useEffect } from "react";
import { getName } from "../../actions/actions";
import { connect } from "react-redux";
import "./Details.css";

function Details ({name, loaded, getName}) {

    useEffect(() => {
        getName(name)
    }, [getName, name]);

    console.log(loaded)
    
    return (
        <div id='general'>
            <h2>Pokemon Details Component</h2>
            <div className='container'>
                <div id='img_container'>
                <img id='img' src={loaded.img} alt='poke_img'/>
                </div>
                <div className='info'>
                    <div id='item'>
                        <span>Name</span>
                        <h4>{loaded.name}</h4>
                    </div>
                    <div id='item'>
                        <span>HP</span>
                        <h4>{loaded.hp}</h4>
                    </div>
                    <div id='item'>
                        <span>Attack</span>
                        <h4>{loaded.attack}</h4>
                    </div>
                    <div id='item'>
                        <span>Defense</span>
                        <h4>{loaded.defense}</h4>
                    </div>
                    <div id='item'>
                        <span>Speed</span>
                        <h4>{loaded.speed}</h4>
                    </div>
                    <div id='item'>
                        <span>Height</span>
                        <h4>{loaded.height}</h4>
                    </div>
                    <div id='item'>
                        <span>Weight</span>
                        <h4>{loaded.weight}</h4>
                    </div>
                    <div id='item'>
                        <span>Types</span>
                        <h4>{loaded.types}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loaded: state.pokemonLoaded
    }
};

export default connect(mapStateToProps, {getName})(Details);