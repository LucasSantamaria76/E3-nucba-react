import { CardPokemonStyled } from './pokemons.styles';

const PokemonsCard = ({ pokemon }) => {
  return (
    <CardPokemonStyled id={pokemon.id}>
      <div class='flip-card-inner'>
        <div class='flip-card-front'>
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
          <h3>{pokemon?.name}</h3>
        </div>
        <div class='flip-card-back'>
          <div className='body'>
            <h3>{pokemon?.name}</h3>
            <p>{`Altura: ${pokemon?.height / 10}M --- Peso: ${pokemon?.weight / 10} kg`}</p>
            <p>{`Tipo: ${pokemon?.types.map((type) => type.type.name)}`}</p>
            <p>{`Habilidades: ${pokemon?.abilities.map((ability) => ability.ability.name)}`}</p>
            <p>{`Espepecie: ${pokemon?.species.name}`}</p>
          </div>
        </div>
      </div>
    </CardPokemonStyled>
  );
};

export default PokemonsCard;
