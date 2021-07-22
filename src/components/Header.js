import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="site-header">
            <Link to='/'>
                <h1>Home</h1>
            </Link>
        </div>
    );
}

export default Header;