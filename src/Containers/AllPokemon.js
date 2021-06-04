import React, { useState, useEffect } from "react";
import { getPokemons } from "../Services/Pokemons";




const AllPokemon = () => {
    const [pokemons, setPokemons] = useState([]); 

    useEffect(() => {
    getPokemons().then((data) => {
        setPokemons(data);
    });
}, []);

    console.log(Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1]); // Short Circuit Evaluation with React
    return <div>All the Pokemons will be here</div>;
};

export default AllPokemon;