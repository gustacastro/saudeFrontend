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
`;

export const Painel = styled.div`
  padding: 100px 0;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 100px;
  text-align: center;

  .shadow-md {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 80%;
    max-height: 80%;
  }
`;
