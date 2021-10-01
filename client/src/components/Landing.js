import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Landing(){
    return(
        <div>
            <img src='https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/07/pokemon-unite-2414165.jpg?itok=8Ncd6CFM' alt='landing'/>
            <Link to='/pokemons'><input type='submit' value='Enter!'/></Link>
        </div>
    )
};

// { <input type='submit' value='Enter!' /> }