import { CardPokemonStyled } from './pokemons.styles';

const PokemonsCard = ({ pokemon }) => {
  return (
    <CardPokemonStyled id={pokemon.id}>
      <div className='flip-card-front'></div>
      <div className='flip-card-back'>
        <div className='inner'>
          <h3>{pokemon?.name}</h3>
          <p>{`Altura: ${pokemon?.height}M --- Peso: ${pokemon?.weight / 10} kg`}</p>
        </div>
      </div>
    </CardPokemonStyled>
  );
};

export default PokemonsCard;
