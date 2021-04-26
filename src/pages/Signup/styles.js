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

  div {
    margin: 10px;
  }

  .right {
    display: flex;
    flex-direction: column;

    span {
      color: #0848e7;
    }

    h1 {
      font-size: 38px;
    }

    p {
      margin-top: 20px;
    }

    a {
      display: flex;
      align-self: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 200px;
      height: 50px;
      margin-top: 80px;
      background: #0848e7;
      -webkit-box-shadow: 0px 0px 5px 0px rgba(8, 72, 231, 1);
      -moz-box-shadow: 0px 0px 5px 0px rgba(8, 72, 231, 1);
      box-shadow: 0px 0px 5px 0px rgba(8, 72, 231, 1);
      border: transparent;
      padding: 10px;
      border-radius: 100px;
      color: #fff;
      transition: 0.2s;

      &:hover {
        background: #0b80ed;
      }
    }
  }
`;
