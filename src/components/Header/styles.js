import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;

  .center {
    color: #fff;
    display: flex;
    align-items: center;
  }

  .red {
    color: red;
    margin-right: 10px;
  }

  .uppercase {
    text-transform: none;
  }
  .dashboard {
    .py-4 {
      border: 1px solid red;
      border-radius: 10px;
      transition: 0.5s;

      &:hover {
        background: rgb(255, 0, 0, 0.8);
      }
    }
  }
`;
