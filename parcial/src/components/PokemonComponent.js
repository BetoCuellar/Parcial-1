import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../features/pokemon/pokemonSlice';
import '../styles/PokemonComponent.css';

const PokemonComponent = () => {
  const [pokemonName, setPokemonName] = useState('');
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon.data);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);

  const handleSearch = () => {
    if (pokemonName.trim() !== '') {
      dispatch(fetchPokemon(pokemonName.toLowerCase()));
    }
  };

  return (
    <div className="pokemon-container">
      <h2>Search for a Pokémon</h2>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleSearch}>Search</button>

      {status === 'loading' && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {pokemon && status === 'succeeded' && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonComponent;
