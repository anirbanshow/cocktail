import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-center">
                <Link to='/'>
                    <img src="https://devroopam-cocktails-api.netlify.app/static/media/logo.5bb3b58e.svg"
                        className='logo'
                    />
                </Link>

                <ul className='nav-links'>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/about'>About</Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;