import React from "react";

const Pokecard = ({id, name, type}) => {
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="pokecard">
            <h3>{name}</h3>
            <img src={img} alt='pokemon img'/>
            <p>Type: {type}</p>
        </div>
    );
} 

export default Pokecard;