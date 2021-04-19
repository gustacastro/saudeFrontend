import React from 'react';

import Titleimg from '../../assets/doctors.png';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <div>
        <span>Secretaria de saúde</span>
        <h1>Seja bem-vindo</h1>
        <p>
          Use o menu de navegação em cima para navegar
          <br />
          pelo nosso novo site.
        </p>
      </div>
      <img src={Titleimg} alt="titleimg" />
    </Container>
  );
}

export default Main;
