import React from "react";

export default function SearchInput(){

    return (
        <div className='find'>
        <label>Find </label>
        <input
        className='search-input'
        type='text'
        name='search'
        placeholder='search...'
        />
        <input
        className='search-input'
        type='submit'
        value='GO!'
        />
    </div>
    )
};