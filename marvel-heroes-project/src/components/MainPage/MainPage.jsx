import React, { useEffect, useState } from "react";
import { Hero } from '../Hero/Hero';
import './MainPage.css';
import { HeroService } from "../../services/heroService";
import { Search } from "../SearchBar/SearchBar";
import { MyTeam } from "../MyTeam/MyTeam";

export const MainPage = () => {
    const [heroes, setHeroes] = useState([]);
    const[searchTerm,setSearchTerm]=useState("");

    useEffect(() => {
        HeroService().then((heroes) => {
            setHeroes(heroes)
        })
    },[setHeroes]);

    let heroArray = heroes.filter((hero) => {
        let result = null
        
                if(searchTerm === ""){
                    result =  hero;
                }else if(hero.name.toLowerCase().includes(searchTerm.toLowerCase()) 
                ){
                    result = hero;
                } 
        
                return result;
    })





    return(
        <div className="mainClass">
             < Search  setSearchTerm={setSearchTerm}/>
        {
        heroArray.map(hero => <Hero hero={hero}/>)


        }
        <MyTeam/>
        </div>

    )
}