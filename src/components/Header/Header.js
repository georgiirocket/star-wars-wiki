import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='main-header'>
            <h1>
                <Link to="/">Star Wars Wiki</Link>
            </h1>

            <ul className="d-flex nav">
                <li>
                    <Link to="/planets">Planets</Link>
                </li>
                <li>
                    <Link to="/peoples">People</Link>
                </li>
                <li>
                    <Link to="/starships">Starships</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;