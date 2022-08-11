import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  //background-color: var(--secondary-color);
  padding: 20px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 10px;
`;

export const ContainerBtnRadio = styled.div`
  font-size: 1.5rem;
  label {
    margin-right: 20px;
    padding: 10px;
  }

  input[type='radio'] {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 5px;
  }
`;

export const InputSelectStyle = styled.select`
  width: 200px;
  height: 40px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 5px;
  margin-top: 2px;
  margin-left: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  background-color: #fff;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #000;
    font-size: 1.3rem;
    font-weight: bold;
  }
`;
