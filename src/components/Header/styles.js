import styled from 'styled-components';
import { darken } from 'polished';

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
    font-size: 40px;
  }

  .uppercase {
    text-transform: none;
  }
  .dashboard {
    .py-4 {
      border-radius: 10px;
      transition: 0.5s;
      background: red;

      &:hover {
        background: ${darken(0.03, 'red')};
      }
    }
  }
`;
