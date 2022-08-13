import { CardPokemonStyled } from './pokemons.styles';

const PokemonsCard = ({ pokemon }) => {
  return (
    <CardPokemonStyled id={pokemon.id}>
      <div className='flip-card-front'>
        <div className='inner'>
          <h3>{pokemon?.name}</h3>
        </div>
      </div>
      <div className='flip-card-back'>
        <div className='inner'>
          <h3>{pokemon?.name}</h3>
          <p>{`Altura: ${pokemon?.height / 10}M --- Peso: ${pokemon?.weight / 10} kg`}</p>
          <p>{`Tipo: ${pokemon?.types.map((type) => type.type.name)}`}</p>
          <p>{`Habilidades: ${pokemon?.abilities.map((ability) => ability.ability.name)}`}</p>
          <p>{`Espepecie: ${pokemon?.species.name}`}</p>
        </div>
      </div>
    </CardPokemonStyled>
  );
};

export default PokemonsCard;
