import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchApi } from "../../actions/actions";
import "./NavBar.css";

const pokemonLogo = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';

export default function NavBar() {

    const dispatch = useDispatch();

    function onClick(e) {
        return dispatch(fetchApi())
    };

    return (
        <>
        <div className='navbar'>
            <Link to='/home'>
                <img 
                src={pokemonLogo}
                alt='imagen'
                width='150px'
                onClick={(e) => onClick(e)} />
            </Link>
            <Link to='/create'><p id='p'>Create new!</p></Link>
        </div>
        </>
    )
};