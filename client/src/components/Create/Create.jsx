import React, {useState} from "react";
import './Create.css';
import { createPoke } from "../../actions/actions";
import {connect} from "react-redux";

const newPokemon = {
    name: '', hp: '', attack: '', defense: '', speed: '', height: '', weight: ''
};

function Create ({createPoke}) {
const [Input, setInput] = useState(newPokemon);

function handleSubmit (e) {
    e.preventDefault();
    createPoke(Input);
}

function inputChange (e) {
    setInput({...Input, [e.target.name]: e.target.value});
}

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
                        onChange={inputChange} />

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

                    <label>Types</label>
                    <option>"Table"</option>
                
                    <button 
                    className='btn'
                    type='submit'
                    >Create!</button>
            </form>
        </div></>
    )
};

export default connect (null, {createPoke})(Create);