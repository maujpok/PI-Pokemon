import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchInput.css";
import {searchName} from "../../actions/actions";


export default function SearchInput () {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function onClick() {
        dispatch(searchName(name.toLowerCase()))
        setName('')
    };

    function changeInput(e) {
        setName(e.target.value);
    }

    return (
        <div className='find'>
        <h4>Find </h4>
        <input
        className='search-input'
        type='text'
        value={name}
        name='search'
        placeholder='search...'
        onChange={changeInput}
        />
        {/* <input
        className='search-input'
        type='submit'
        value='GO!'
        onClick={onClick}
        /> */}
        <button onClick={onClick}>GO!</button>
    </div>
    )
};