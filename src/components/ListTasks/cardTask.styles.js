import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  font-size: 1.5rem;
  border: 1px solid #000;
  padding: 0 0.3rem;
  border-radius: 5px;
  box-shadow: 1px 1px 5px
    ${({ completed }) => (completed ? 'var(--success-color)' : 'var(--danger-color)')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    p {
      margin: 0;
      padding: 0;
      text-transform: capitalize;
      text-decoration: ${({ completed }) => completed && 'line-through'};
    }
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  input[type='checkbox'] {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.8rem;
  }
`;
