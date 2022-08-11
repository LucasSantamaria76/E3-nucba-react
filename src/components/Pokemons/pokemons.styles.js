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
  grid-gap: 20px;
  overflow-y: Auto;
  padding: 20px;
  background-color: #eee;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid #ccc;
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

export const CardPokemonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fdebd0;
  cursor: pointer;
  h4 {
    margin: 10px 0;
    font-size: 1.5rem;
    text-transform: capitalize;
    text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0;
  }
  h5 {
    margin: 0 0 10px;
    margin-top: 5px;
    font-size: 1rem;
  }
  img {
    width: 220px;
    height: 220px;
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
