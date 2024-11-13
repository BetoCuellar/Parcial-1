import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import pokemonReducer from '../features/pokemon/pokemonSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    pokemon: pokemonReducer,
  },
});

export default store;
