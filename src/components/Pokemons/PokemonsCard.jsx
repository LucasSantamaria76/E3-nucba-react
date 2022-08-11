import { CardPokemonStyled } from './pokemons.styles';

const PokemonsCard = ({ pokemon }) => {
  return (
    <CardPokemonStyled>
      <img
        src={
          pokemon?.sprites.other.home?.front_default ||
          pokemon?.sprites?.front_default ||
          pokemon?.sprites?.front_shiny
        }
        alt={pokemon?.name}
      />
      <h4>Nombre: {pokemon?.name}</h4>
      <h5>{`Altura: ${pokemon?.height}M --- Peso: ${pokemon?.weight / 10} kg`}</h5>
    </CardPokemonStyled>
  );
};

export default PokemonsCard;
