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

    h1 {
      font-size: 28px;
      width: 100%;
      color: #fff;
      text-align: center;
      background: #0848e7;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 20px;
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
      border-bottom: 1px solid #0848e7;

      span {
        font-size: 14px;
      }
    }
  }
`;
