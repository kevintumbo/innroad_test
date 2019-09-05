import React from 'react';
import './header.sass'

function Header({heading}) {
    return (
        <div className="header">
            <h1 className="header_text">{heading}</h1>
        </div>
    )
}

export default Header;
