import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  padding: 20px;
  padding-top: 150px;
  flex-direction: column;

  .background {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Painel = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 20px;
`;

export const LeftSide = styled.li`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-size: 16px;
  border-radius: 10px;
  text-align: right;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);

  button {
    padding: 0 5px;
    background: none;
    border-width: 0px;
    font-size: 14px;
    color: #404040;
  }

  a {
    padding: 0 5px;
    background: none;
  }
  .div2 {
    padding: 3px;
  }

  h1 {
    font-size: 16px;
    margin: auto 0;
  }

  .material-icons {
    color: #2496ef;

    &:hover {
      color: ${darken(0.08, '#2496ef')};
    }
  }
`;
