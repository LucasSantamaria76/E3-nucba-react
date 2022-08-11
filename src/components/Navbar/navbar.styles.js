import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  font-size: 1.8rem;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.7);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  & ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 3px;
      list-style: none;
      margin-right: 30px;
      svg {
        width: 60px;
        height: 60px;
        fill: #e74c3c;
      }
      .tasksIcon {
        fill: ${({ hasTasks }) => hasTasks && '#00ff00'};
      }
      span {
        position: absolute;
        top: 20px;
        left: 18px;
        font-size: 1.2rem;
        background: var(--primary-color);
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #00ff00;
      }
    }
  }

  & a {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      font-weight: bold;
      color: red;
    }
    &.active:hover {
      text-decoration: none;
      cursor: default;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PokeballIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 15px;
`;
