import React from "react";

import "/Users/tinameldahl/personal-pokdex/src/Components/card.css";


const PokemonCard = (props) => {
    console.log(props.id);
    return (
        <div className="card">
            <h3 className="card-title">{props.name}</h3>
            <img
                className="card-img"
                src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
            />
        </div>
    );
};



export default PokemonCard;