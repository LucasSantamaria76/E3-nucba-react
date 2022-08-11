import styled from 'styled-components';

export const Button = styled.button`
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '40px'};
  margin: 8px 4px;
  padding: ${({ p }) => p || '8px'};
  border: ${({ b }) => b || '1px solid #ccc'};
  border-radius: ${({ br }) => br || '5px'};
  font-size: ${({ fz }) => fz || '1.2rem'};
  cursor: pointer;
  background-color: ${({ bg }) => (bg ? `var(${bg})` : 'var(--primary-color)')};
  box-shadow: ${({ bs }) => bs || '1px 1px 5px #000'};
  color: ${({ color }) => color || '#000'};
  text-align: center;
  transition: all 0.1s ease-in-out;
  &:active {
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    cursor: not-allowed;
  }
`;
