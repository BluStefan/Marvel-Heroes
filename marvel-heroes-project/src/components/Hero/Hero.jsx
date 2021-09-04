import React from 'react';
import './Hero.css';

export const Hero = () => {
    return (
    <div className="allHeroes">
    <div className="card" >
        <h5 className="card-title">Some Hero</h5>
        <img className="card-img-top" src="" alt="slika " />
        <div className="card-body">
            <button  className="card-link">Info</button>
            <button  className="card-link">Add</button>
        </div>
    </div>
</div>
    )
}