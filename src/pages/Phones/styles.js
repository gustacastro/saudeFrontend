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

  .background {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 28px;
      width: 100%;
      color: #fff;
      text-align: center;
      background: #2496ef;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;

      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    }

    div {
      width: 30%;
    }

    .table {
      width: 30%;
      white-space: nowrap;
    }

    .line {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 8px;
      border-bottom: 1px solid #2496ef;

      span {
        font-size: 14px;
      }
    }
  }
`;
