import React from 'react';

import './styles.sass'
function Item ({item}) {
    return (
        <div className="itemContainer">
            <h3 className="itemTitle">{item.itemTitle}</h3>
            <p className="itemDescription">{item.description}</p>
        </div>
    )
}

export default Item
