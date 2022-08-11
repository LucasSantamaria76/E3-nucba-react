import { Types } from './pokeTypes';

const initialState = {
  listPokemons: [],
  pokemons: [],
  nextPage: null,
  previousPage: null,
  loading: false,
  error: false,
};

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.POKEMONS_SUCCESS:
      return {
        ...action.payload,
        pokemons: [],
        loading: false,
        error: false,
      };
    case Types.POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.POKEMONS_ERROR:
      return {
        ...state,
        error: true,
      };
    case Types.DATA_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
