import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
    const { name, image, description, country_code } = item;
    return (
        <div className="item-container">
            <div className="item-title">
                <p>{name.toUpperCase()}</p>
            </div>
            {/*<div 
                style={{backgroundImage:`url(${image.url})`}}
                className="item-image"
            />*/}
            
            <img src={image.url} alt={`${image.id}`}/>
            <div className="item-footer">
                <p>{description}</p>
                <p>Country: {country_code}</p>
            </div>
        </div>
    );
};

export default CollectionItem;