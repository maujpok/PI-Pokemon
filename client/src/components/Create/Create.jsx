import React, {useEffect, useState} from "react";
import './Create.css';
import {connect} from "react-redux";
import { getTypes, sendData } from "../../actions/actions";
import { createJson, orderByName } from "../../helpers";


const newPokemon = {
    name: "",
    hp: undefined,
    attack: undefined,
    defense: undefined,
    speed: undefined,
    height: undefined,
    weight: undefined,
    types: undefined
};

function Create ({pokemonsTypes, getTypes, sendData}) {

const [Input, setInput] = useState(newPokemon);
const [_types, setTypes] = useState([]);

useEffect(() => {
    getTypes()
    // console.log(pokemonsTypes)
}, [getTypes]);

orderByName(pokemonsTypes);


function inputChange (e) {
    setInput({...Input, [e.target.name]: e.target.value});
};

function handleChange(e) {
    let value = e.target.value;
    let valueNum = parseInt(value);
    _types.includes(valueNum) ?
    setTypes(_types.filter(e => e !== valueNum))
    :
    setTypes([..._types, parseInt(e.target.value)])
};

let redir = () => {
    window.location.href = `/${Input.name.toLowerCase()}`;
}

function handleSubmit (e) {
    e.preventDefault()
    sendData(createJson(Input, _types))
    setInput(newPokemon);
    // handleChange(e)
    alert("Your Pokemons now lives! Come to see it");
    redir();
};

return (
    <>
    <div>
        <h1>Create your own Pokemon!</h1>
    </div><div>
            <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input
                        id='form'
                        name='name'
                        type='text'
                        placeholder='enter name...'
                        value={Input.name}
                        onChange={inputChange}
                        required />

                    <label>HP</label>
                    <input
                        id='form'
                        name='hp'
                        type='text'
                        placeholder='enter hp...'
                        value={Input.hp}
                        onChange={inputChange} />

                    <label>Attack</label>
                    <input
                        id='form'
                        name='attack'
                        type='text'
                        placeholder='enter attack points...'
                        value={Input.attack}
                        onChange={inputChange} />

                    <label>Defense</label>
                    <input
                        id='form'
                        name='defense'
                        type='text'
                        placeholder='enter defense points...'
                        value={Input.defense}
                        onChange={inputChange} />

                    <label>Speed</label>
                    <input
                        id='form'
                        name='speed'
                        type='text'
                        placeholder='enter speed...'
                        value={Input.speed}
                        onChange={inputChange} />

                    <label>Height</label>
                    <input
                        id='form'
                        name='height'
                        type='text'
                        placeholder='enter height...'
                        value={Input.height}
                        onChange={inputChange} />

                    <label>Weight</label>
                    <input
                        id='form'
                        name='weight'
                        type='text'
                        placeholder='enter weight...'
                        value={Input.weight}
                        onChange={inputChange} />

                    <div id='container'>
                        <b>Select type/s</b>
                        <div id='types'>
                        {
                            pokemonsTypes.map(e => (
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
                    
                    <button 
                    className='btn'
                    type='submit'
                    >Create!</button>
            </form>
        </div></>
    )
};


const mapStateToProps = (state) => {
    return {
        pokemonsTypes: state.types
    }
};

export default connect (mapStateToProps, {getTypes, sendData})(Create);