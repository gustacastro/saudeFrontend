import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100px;
    margin-right: 20px;
  }

  nav {
    display: flex;
    align-items: center;
    height: 100%;
  }

  ul {
    display: flex;
    margin: 0 5px;
    height: 100%;
    align-items: center;

    li {
      border-bottom: 1px solid transparent;
      margin: 0 8px;
      padding: 5px 0;
      transition: 0.2s;

      &:hover {
        border-bottom: 1px solid blue;
        color: #0b48ed;
      }

      a {
        &:hover {
          color: #0b48ed;
        }
      }
    }

    .covid {
      display: flex;
      background: red;
      height: 100%;
      padding: 0 15px;
      height: 100%;
      align-items: center;
      transition: 0.2s;

      &:hover {
        background: #0b48ed;
        color: #fff;
      }

      li {
        border-bottom: 1px solid transparent;
        color: #fff;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
    height: 100%;

    a {
      margin-left: 15px;
      text-align: center;
      display: flex;
      align-items: center;
    }

    #linkRegister {
      border-bottom: 1px solid transparent;
      margin: 0 8px;
      padding: 5px 0;
      transition: 0.2s;

      &:hover {
        border-bottom: 1px solid #fe0f17;
        color: #fe0f17;
      }

      a {
        &:hover {
          color: #fe0f17;
        }
      }
    }

    #linkLogin {
      background: #0b48ed;
      height: 100%;
      padding: 0 20px;
      color: #fff;
      font-size: 18px;
      transition: 0.2s;

      &:hover {
        background: #0b80ed;
      }
    }
  }
`;
