import styled from 'styled-components';

export const Form = styled.form`
  width: 96%;
  margin: 0 auto;
  h1 {
    margin: 0;
    padding: 0;
    color: #000;
    text-align: center;
  }

  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    margin: 10px auto 0;
    padding: 8px;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 1.2rem;
  }

  input:focus {
    outline: none;
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  button:active {
    box-shadow: none;
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }

  .inputError {
    border: 1px solid red;
  }
`;
