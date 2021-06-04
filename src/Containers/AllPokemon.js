import React, { useState, useEffect } from "react";
import { getPokemons } from "../Services/Pokemons";
import PokemonCard from "../Components/PokemonCard";




const AllPokemon = () => {
    const [pokemons, setPokemons] = useState([]); 

    useEffect(() => {
    getPokemons().then((data) => {
        setPokemons(data);
    });
}, []);

    console.log(Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1]); // Short Circuit Evaluation with React
    return (
        <div className="card">
        {Object.entries(pokemons)[3] &&
        Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={index +1} />;
        })}
        </div>
    );
};

export default AllPokemon;