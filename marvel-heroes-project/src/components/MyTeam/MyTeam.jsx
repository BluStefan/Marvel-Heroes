import React from "react";

import './MyTeam.css';

export const MyTeam = ({hero, removeMember}) => {
    
    return (
    <div className="myTeam">
      
    <div className="someHero">
        <img className="card-img" src={hero.image} alt="slika" onClick={() => removeMember(hero)} />
        <h5 className="card-title">{hero.name}</h5>
    </div>
</div>
    )
}