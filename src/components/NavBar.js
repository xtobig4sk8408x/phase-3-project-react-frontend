import React from 'react';
import {Route, Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className='navbar'>
            <Route>
            <div className='nav-wrapper'><Link to="/">Home</Link></div>
            <div className='nav-wrapper'><Link to="/jokes/new">Jokes Form</Link></div>
            </Route>
        </nav>
    )
}

export default NavBar;