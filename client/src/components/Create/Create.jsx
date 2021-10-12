import React, { useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { getTypes, sendData } from "../../actions/actions";
import { createJson, fromAtoZ, newPokemon, redirect } from "../../helpers";
import './Create.css';

export default function Create () {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getTypes())
    }, [dispatch]);
    
    const types = useSelector((state) => state.types.sort(fromAtoZ))

    const [Input, setInput] = useState(newPokemon);
    const [_types, setTypes] = useState([]);
    const [error, setError] = useState('');
    const [errortype, setErrortype] = useState('');


    function validateName(e) {
        if(!/^[A-Za-z0-9_-]*$/.test(e)) {
            setError('Without spaces please')
        } else {
            setError('')
        }
        setInput({...Input, name: e})
    };

    function inputChange (e) {
        setInput({...Input, [e.target.name]: e.target.value});
    };

    function selectType(e) {
        setErrortype('');
        let valueNum = parseInt(e.target.value);

        _types.includes(valueNum) ?
        setTypes(_types.filter(e => e !== valueNum))
        :
        setTypes([..._types, valueNum])
    };


    function onSubmit (e) {
        e.preventDefault()
        if(_types.length === 0) return setErrortype('debes elegir un tipo');
        const Pokemon = createJson(Input, _types);
        dispatch(sendData(Pokemon));
        console.log('front', Pokemon);
        alert('creado')
        redirect(Input.name)
    };

    return (
        <>
        <div>
            <h1>Create your own Pokemon!</h1>
        </div>
            <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input
                        id='form'
                        name='name'
                        type='text'
                        placeholder='enter name...'
                        value={Input.name}
                        onChange={e => validateName(e.target.value)}
                        required />
                    {!error ? null : <span id='danger'>{error}</span>}

                    <label>HP</label>
                    <input
                        id='form'
                        name='hp'
                        type='text'
                        placeholder='enter hp...'
                        value={Input.hp}
                        onChange={e => inputChange(e)} />

                    <label>Attack</label>
                    <input
                        id='form'
                        name='attack'
                        type='text'
                        placeholder='enter attack points...'
                        value={Input.attack}
                        onChange={e => inputChange(e)} />

                    <label>Defense</label>
                    <input
                        id='form'
                        name='defense'
                        type='text'
                        placeholder='enter defense points...'
                        value={Input.defense}
                        onChange={e => inputChange(e)} />

                    <label>Speed</label>
                    <input
                        id='form'
                        name='speed'
                        type='text'
                        placeholder='enter speed...'
                        value={Input.speed}
                        onChange={e => inputChange(e)} />

                    <label>Height</label>
                    <input
                        id='form'
                        name='height'
                        type='text'
                        placeholder='enter height...'
                        value={Input.height}
                        onChange={e => inputChange(e)} />

                    <label>Weight</label>
                    <input
                        id='form'
                        name='weight'
                        type='text'
                        placeholder='enter weight...'
                        value={Input.weight}
                        onChange={e => inputChange(e)} />

                    <label>Image</label>
                    <input
                        id='form'
                        name='img'
                        type='link'
                        placeholder='enter image link...'
                        value={Input.img}
                        onChange={e => inputChange(e)} />

                    <div id='container'>
                        <b>Select type/s</b>
                        <div id='types'>
                        {
                            types.map(e => (
                                <div key={e.id} id='unit'>
                                    <input
                                    type="checkbox"
                                    value={e.id}
                                    onClick={e => selectType(e)}
                                    />
                                    <span id='names'>{e.name}</span>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    {errortype ? <span id='danger'>{errortype}</span>:null}
                    <button 
                    className='btn'
                    type='submit'
                    >Create!</button>
            </form>
        </>
        )
};