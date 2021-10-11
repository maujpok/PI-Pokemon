import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const pokemonLogo = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';

export default function NavBar() {
    return (
        <>
        <div className='navbar'>
            <Link to='/home'>
            <img src={pokemonLogo} alt='imagen' width='150px' />
            </Link>
            <Link to='/create'><p id='p'>Create new!</p></Link>
        </div>
        {/* <div>
            <SearchBar />
        </div> */}
        </>
    )
};