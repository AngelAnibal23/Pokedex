import { useState } from "react";

const pokeApi = "https://pokeapi.co/api/v2/pokemon/"; 

export function SearchPokemon (){ 
    const [search, setSearch] = useState(""); 

    const [pokemon, setPokemon] = useState<any> (null); 

    const handleSearch = async () => {
        if(!search) return;  
        const res = await fetch(pokeApi + search); 
        const data = await res.json(); 
        setPokemon(data); 
    }; 

    
    return (
        <div className="p-4 flex">
            <div className="flex">
                <input 
                type="text"
                placeholder="Bucar pokemon" 
                className="input input-bordered input-accent w-full max-w-xs" 
                value={search}
                onChange={ (e) => {
                    setSearch(e.target.value); 
                }}
                />
                <button onClick={handleSearch} className="btn btn-success mx-4">Buscar</button>
            </div>
            { pokemon ? (
                <div>
                    <h3> {pokemon.name} </h3>
                    <img src={pokemon.sprites.front_default} alt="pokemon.name" />
                </div>
            ): null }
        </div>
    ); 
}

export default SearchPokemon; 