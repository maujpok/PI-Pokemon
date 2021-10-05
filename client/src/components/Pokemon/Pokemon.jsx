import React from "react";
import './Pokemon.css';
import {Link} from "react-router-dom";

export default function Pokemon({id, img, name, types}) {
    
    return (
        <div key={id} className='pokemoncard'>
            <Link to={`/${name}`}>
            <p className='p'>{name}</p>
            <img src={img} alt='img' className='img'/>
            <p className='p'>{types}</p>
            </Link>
        </div>
    )
};