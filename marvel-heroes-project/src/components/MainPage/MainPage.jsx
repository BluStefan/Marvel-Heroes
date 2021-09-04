import React, { useEffect, useState } from "react";
import { Hero } from '../Hero/Hero';
import './MainPage.css';
import { HeroService } from "../../services/heroService";
import { Search } from "../SearchBar/SearchBar";
import { MyTeam } from "../MyTeam/MyTeam";

export const MainPage = () => {
    const [heroes, setHeroes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedHeroes, setSelectedHeroes] = useState([]);

    function addHeroToMyteam(hero) {
        let myHeroes = [...selectedHeroes];
        let heroExist = myHeroes.filter(item=>item.id === hero.id);
        if(heroExist && heroExist.length>0) {
            alert("Hero already selected");
        } else {
        myHeroes.push(hero);
        setSelectedHeroes(myHeroes);
        }
        
    }
    function removeHeroToMyteam(hero) {
     

         let deletedHero = selectedHeroes.filter(item => item.id !==hero.id);
         setSelectedHeroes(deletedHero);
    }


    useEffect(() => {
        HeroService().then((heroes) => {
            setHeroes(heroes)
        })
    }, [setHeroes]);

    let heroArray = heroes.filter((hero) => {
        let result = null

        if (searchTerm === "") {
            result = hero;
        } else if (hero.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            result = hero;
        }

        return result;
    })


    let heroList = heroArray.map(hero => <Hero hero={hero} addMember = {addHeroToMyteam} />);
    let myTeamArray = selectedHeroes.map(hero =><MyTeam hero={hero} removeMember={removeHeroToMyteam}/>);


    return (
        <div className="mainClass">
            < Search setSearchTerm={setSearchTerm} />
            {heroList}
            <h4>My Team</h4>
            {myTeamArray}
          
        </div>

    )
}