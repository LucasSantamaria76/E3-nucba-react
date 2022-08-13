import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ListContainer = styled.div`
  margin: 100px 30px 20px 20px;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  overflow-y: Auto;
  padding: 20px;
  background-color: #eee;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid #ccc;
  perspective: 1000px;
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const ControlsContainer = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(2);
    }
  }
`;

export const CardPokemonStyled = styled.div`
  margin: 20px;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;

  .flip-card-front,
  .flip-card-back {
    width: 300px;
    min-height: 300px;
    height: auto;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.9);
    background-color: #2980b999;
    background-image: ${({ id }) =>
      `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png)`};
    background-size: cover;
    background-position: center;
    text-align: center;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  }

  .flip-card-front {
    transform: rotateY(0deg);
  }

  .flip-card-back {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
  }

  .flip-card-front::after,
  .flip-card-back::after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
  }

  .flip-card-front .inner,
  .flip-card-back .inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    z-index: 2;
  }

  .inner h3 {
    margin-bottom: 8px;
    color: #ffffff;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    text-transform: capitalize;
  }

  .inner p {
    color: #ffffff;
    font-size: 16px;
    line-height: 28px;
  }

  &:hover .flip-card-front {
    transform: rotateY(-180deg);
  }

  &:hover .flip-card-back {
    transform: rotateY(0deg);
  }
`;

export const DetailCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 500px;
  height: 200px;
  margin-top: 30px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fad7a0;
  overflow: hidden;
  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
  img {
    margin: 0;
    padding: 0;
    width: 200px;
    height: 200px;
    background-color: #fff;
  }
`;
