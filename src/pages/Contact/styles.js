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
    margin-bottom: 30px;
  }

  div {
    margin-left: -5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px 10px;
    width: 90%;
  }
`;

export const Users = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  white-space: nowrap;

  .separete {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 1px solid #0848e7;
  }
  span {
    margin: 5px 0;
  }

  .div2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
