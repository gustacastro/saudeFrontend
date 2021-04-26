import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 20px;
  padding-top: 200px;
  flex-direction: column;

  h1 {
    font-size: 38px;
  }

  .background {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
`;

export const Painel = styled.div`
  padding: 10px 0;
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px 20px;
  color: #404040;
`;

export const LeftSide = styled.li`
  color: #404040;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #0848e7;
  border-width: 2px 0px 2px 0px;
  text-decoration: none;
  font-size: 16px;

  button {
    padding: 0 5px;
    background: none;
    border-width: 0px;
    font-size: 14px;
    color: #404040;
  }

  a {
    color: #404040;
    padding: 0 5px;
    background: none;
    border-width: 0px;
    font-size: 16px;
  }

  div {
    display: flex;
    align-items: right;
    justify-content: left;
  }

  .div2 {
    text-align: right;
    display: flex;
    align-items: right;

    span {
      font-size: 14px;
    }
  }
`;
