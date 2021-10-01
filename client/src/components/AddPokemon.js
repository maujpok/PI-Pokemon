import React from 'react';
import './Styles/AddPokemon.css'
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

const newPokemon = {
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: ''
};

export default function AddPokemon() {

    const [Input, setInput] = React.useState(newPokemon);

    function handleSubmit (e) {
        e.preventDefault();
        // aca va la action de enviar la data del form
        // alert("Pokemon created!");
    }

    function inputChange (e) {
        setInput({...Input, [e.target.name]: e.target.value});
    }

    return (
        <form classname='form' onSubmit={handleSubmit}>
            <div className='addPokemon'>
                <label>Name</label>
                <input
                name='name'
                type='text'
                placeholder='enter name...'
                value={Input.name}
                onChange={inputChange}/>
                
                <label>HP</label>
                <input
                name='hp'
                type='text'
                placeholder='enter hp...'
                value={Input.hp}
                onChange={inputChange}/>

                <label>Attack</label>
                <input
                name='attack'
                type='text'
                placeholder='enter attack points...'
                value={Input.attack}
                onChange={inputChange}/>

                <label>Defense</label>
                <input
                name='defense'
                type='text'
                placeholder='enter defense points...'
                value={Input.defense}
                onChange={inputChange}/>

                <label>Speed</label>
                <input
                name='speed'
                type='text'
                placeholder='enter speed...'
                value={Input.speed}
                onChange={inputChange}/>

                <label>Height</label>
                <input
                name='height'
                type='text'
                placeholder='enter height...'
                value={Input.height}
                onChange={inputChange}/>

                <label>Weight</label>
                <input
                name='weight'
                type='text'
                placeholder='enter weight...'
                value={Input.weight}
                onChange={inputChange}/>

                <button type='submit'>Create!</button>
            </div>
        </form>
    )
};