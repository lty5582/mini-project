import { createSelector } from "@reduxjs/toolkit";

 export const selectPokemonId = (pokemonId) => createSelector(
    state => state.pokemon.data,
    (pokemon) => pokemon.find(el => el.id === pokemonId)
)