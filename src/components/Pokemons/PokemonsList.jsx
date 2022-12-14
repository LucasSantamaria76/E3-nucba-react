import { Container, ControlsContainer, ListContainer } from './pokemons.styles';
import { useSelector, useDispatch } from 'react-redux';
import { FcLeft, FcRight, FcUp } from 'react-icons/fc';
import PokemonsCard from './PokemonsCard';
import { Msg } from '../common/Msg';
import { useEffect } from 'react';
import { getPokemons } from '../../redux/pokeApi/pokeActions';

const PokemonsList = () => {
  const { error, loading, pokemons, nextPage, previousPage } = useSelector(
    (state) => state.pokeReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    !pokemons.length && dispatch(getPokemons(0));
  }, []);

  const handleClick = (e) => {
    const id = e.target.ownerSVGElement?.id;
    id === 'left' && previousPage !== null && dispatch(getPokemons(previousPage));
    id === 'right' && nextPage !== null && dispatch(getPokemons(nextPage));
    id === 'up' && dispatch(getPokemons(0));
  };

  error && (
    <Msg>
      <h2>Error al cargar Pokemones</h2>
    </Msg>
  );
  loading && (
    <Msg>
      <h2>Cargando Pokemones...</h2>
    </Msg>
  );

  return (
    <Container>
      <ListContainer>
        {pokemons?.map((pokemon) => (
          <PokemonsCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ListContainer>
      <ControlsContainer>
        <FcLeft id='left' onClick={(e) => handleClick(e)} />
        <FcUp id='up' onClick={(e) => handleClick(e)} />
        <FcRight id='right' onClick={(e) => handleClick(e)} />
      </ControlsContainer>
    </Container>
  );
};

export default PokemonsList;
