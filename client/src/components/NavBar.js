import React from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to='/pokemons'><p>VIEW POKEMONS</p></Link>
            <Link to='/add'><p>ADD</p></Link>
        </nav>
    )
};

// const mapStateToProps = (state) => {

// };

export default NavBar;

// export default connect(mapStateToProps)(MainPage);