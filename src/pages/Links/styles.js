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
`;

export const Painel = styled.div`
  padding: 10px 0;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px 100px;
  color: #404040;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const LeftSide = styled.li`
  display: flex;
  padding: 5px;
  align-items: center;
  width: 100%;
  border-width: 2px 0px 2px 0px;
  text-decoration: none;

  border-radius: 10px;
  border: 1px solid #0848e7;

  img {
    max-width: 150px;
    max-height: 100px;
  }

  .divright {
    width: 300px;
    height: 100px;
    max-height: 100px;

    border-radius: 10px;

    a {
      margin-top: 20px;
      background: #0848e7;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(8, 72, 231, 1);
      -moz-box-shadow: 0px 0px 5px 0px rgba(8, 72, 231, 1);
      box-shadow: 0px 0px 5px 0px rgba(8, 72, 231, 1);
      border: transparent;
      padding: 10px;
      border-radius: 100px;
      color: #fff;
      transition: 0.2s;
      width: 50%;
      align-self: center;

      &:hover {
        background: #0b80ed;
      }
    }

    img {
      margin-bottom: 20px;
      width: 100%;
    }
  }

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  span {
  }
`;
