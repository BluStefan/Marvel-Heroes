import React, { useEffect, useState } from "react";
import { Hero } from '../Hero/Hero';
import './MainPage.css';
import { HeroService } from "../../services/heroService";

export const MainPage = () => {
    const [heroes, setHeroes] = useState([]);
    useEffect(() => {
        HeroService().then((heroes) => {
            setHeroes(heroes)
        })
    },[setHeroes]);

    return(
        <div className="mainClass">
        {
        heroes.map(hero => <Hero hero={hero}/>)


        }
        </div>

    )
}