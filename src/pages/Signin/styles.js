import styled from 'styled-components';

import password from '../../assets/password.svg';
import user from '../../assets/user.svg';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 20px;
  padding-top: 150px;

  .left {
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
    }
  }

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .userimg {
      background-image: url(${user});
      background-repeat: no-repeat;
      background-size: 18px;
      background-position-y: 50%;
      background-position-x: 30px;
    }

    .password {
      background-image: url(${password});
      background-repeat: no-repeat;
      background-size: 18px;
      background-position-y: 50%;
      background-position-x: 30px;
    }

    p {
      margin: 5px 2px;
    }

    input {
      padding: 15px 15px 15px 70px;
      border: 1px solid transparent;
      border-radius: 100px;
      transition: 0.2s;
      font-weight: bold;
      margin: 5px 0;
      max-width: 300px;

      -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

      &::placeholder {
        color: rgb(78, 78, 80, 0.6);
      }

      &:hover {
        border-bottom: 1px solid #0848e7;
      }
    }

    input:focus {
      border: 1px solid #0848e7;
    }

    button {
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

      &:hover {
        background: #0b80ed;
      }
    }

    a {
      margin-top: 25px;
      align-self: center;
      border-bottom: 1px solid transparent;
      padding: 5px 0;
      transition: 0.2s;

      &:hover {
        border-bottom: 1px solid blue;
        color: #0b48ed;
      }
    }
  }
`;
