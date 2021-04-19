import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  max-width: 1100px;

  img {
    width: 50%;
    height: 50%;
  }

  span {
    color: #0b48ed;
    font-weight: bold;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
