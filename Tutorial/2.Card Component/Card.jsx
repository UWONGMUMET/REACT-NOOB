import React from 'react';
import profilePic from '../assets/4766956.png';
import './cardstyle.css';

function Card({ title, text, image }) {
    return (
        <div className="card">
            <img className='card-image' src={image || profilePic} alt="Profile" />
            <h2 className='card-title'>{title}</h2>
            <p className='card-text'>{text}</p>
        </div>
    );
}

export default Card;
