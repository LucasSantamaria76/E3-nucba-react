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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 20px;
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
  width: 320px;
  height: 504px;
  perspective: 2000px;

  h3 {
    margin-bottom: 8px;
    color: #000;
    letter-spacing: 2px;
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3), 0px -4px 10px rgba(255, 255, 255, 0.3);
    font-size: 2rem;
    font-weight: 700;
    line-height: 40px;
    text-transform: capitalize;
  }

  p {
    color: #000;
    font-size: 1.5rem;
    line-height: 28px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 28px;
    transition: all 550ms cubic-bezier(0.1, 0.22, 0.8, 1.13);
    transform-style: preserve-3d;
    img {
      width: 100%;
      height: auto;
    }
  }
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 28px;
    backface-visibility: hidden;
    text-align: center;
    display: grid;
    place-items: center;
    padding: 32px;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.6);
  }
  .flip-card-front {
    background-color: #2f2f2f;
    color: #000;
    h3 {
      font-size: 2.5rem;
    }
  }

  .flip-card-back {
    background-color: #b1cfc8;
    transform: rotateY(180deg);
  }
  &:hover .flip-card-inner {
    transform: rotateY(-180deg);
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
