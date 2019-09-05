import React from 'react';
import './header.sass'

function Header({heading}) {
    return (
        <div className="header">
            <h1>{heading}</h1>
        </div>
    )
}

export default Header;
