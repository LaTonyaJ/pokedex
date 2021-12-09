import React from 'react';
import Pokecard from './pokecard';
import pokemon from './pokemon';

const Pokedex = (props) => {
    return (
        <>
        <div>
        <h3>Pokedex</h3>
        <div className='cards'>
        {pokemon.map(p => 
        (<Pokecard key={p.id} id={p.id} name={p.name} type={p.type}/>))}
        </div>
        </div>
        </>
    );
}

export default Pokedex;