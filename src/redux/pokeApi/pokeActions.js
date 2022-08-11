import { Types } from './pokeTypes';

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/';

const getDataPokemon = (url) => async (dispatch) => {
  dispatch({ type: Types.POKEMONS_REQUEST });
  try {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: Types.DATA_POKEMONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: Types.POKEMONS_ERROR });
  }
};

export const getPokemons = (page) => async (dispatch) => {
  dispatch({ type: Types.POKEMONS_REQUEST });
  try {
    const res = await fetch(`${pokeURL}?offset=${page * 20}&limit=20`);
    const data = await res.json();
    await dispatch({
      type: Types.POKEMONS_SUCCESS,
      payload: {
        listPokemons: data.results,
        nextPage: !!data.next ? page + 1 : null,
        previousPage: !!data.previous ? page - 1 : null,
      },
    });
    await data.results.map(async (pokemon) => {
      await dispatch(getDataPokemon(pokemon.url));
    });
  } catch (error) {
    dispatch({ type: Types.POKEMONS_ERROR });
  }
};
