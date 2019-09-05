import React from 'react';

import './styles.sass'
function Item ({item}) {
    return (
        <div className="itemContainer">
            <h3>{item.itemTitle}</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default Item
