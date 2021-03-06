import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  padding: 20px;
  padding-top: 150px;
  flex-direction: column;

  Form {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin: 10px;
    }

    .hori {
      display: flex;
      width: 100%;
      justify-content: center;
      align-content: center;

      .div {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin: 0 50px;
        justify-content: space-between;
      }

      .span {
        margin: 0 50px;
      }

      .right {
        display: flex;
        flex-direction: column;
      }
    }

    input,
    textarea {
      padding: 10px 20px;
      border: 1px solid transparent;
      border-radius: 10px;
      transition: 0.2s;
      font-weight: bold;
      margin: 5px 0;
      max-width: 300px;
      width: 100%;

      -webkit-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
      box-shadow: inset 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

      &::placeholder {
        color: rgb(78, 78, 80, 0.3);
      }

      &:hover {
        border-bottom: 1px solid #2496ef;
      }
    }

    input:focus,
    textarea:focus {
      border: 1px solid #2496ef;
    }

    .file {
      padding: 10px 20px;
      border: 1px solid transparent;
      border-radius: 0px;
      transition: 0.2s;
      max-width: 400px;
      width: 100%;
      margin-bottom: 20px;

      -webkit-box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0);
      -moz-box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0);
      box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0);
    }

    textarea {
      border-radius: 15px;
      padding: 10px 20px;
      margin-bottom: 20px;
      resize: none;
    }
  }
`;
