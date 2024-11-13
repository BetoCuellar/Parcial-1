import React from 'react';
import TodoComponent from './components/TodoComponent';
import PokemonComponent from './components/PokemonComponent';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <TodoComponent />
      <PokemonComponent />
    </div>
  );
}

export default App;
