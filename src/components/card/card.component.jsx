import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img 
            alt='monster' 
            src={`http://cdn.pics.fhg.av69.tv/53832/${props.monster.id}.jpg`}
            />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
);

