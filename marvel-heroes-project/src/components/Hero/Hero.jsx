import React from 'react';
import './Hero.css';

export const Hero = ({hero}) => {
    
    return (
    <div className="allHeroes">
    <div className="card" >
        <h5 className="card-title">{hero.name}</h5>
        <img className="card-img-top" src={hero.image} alt="slika " />
        <div className="card-body">
            <button  className="card-link">Info</button>
            <button  className="card-link">Add</button>
        </div>
    </div>
</div>
    )
}