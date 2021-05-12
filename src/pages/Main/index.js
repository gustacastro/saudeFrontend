import React from 'react';

import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';
import Titleimg from '../../assets/doctors2.jpg';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <div>
        <H4 color="blueGray">Seja bem-vindo</H4>
        <LeadText color="blueGray">
          Use o menu de navegação em cima para navegar
          <br />
          pelo nosso novo site.
        </LeadText>
      </div>
      <img src={Titleimg} alt="titleimg" />
    </Container>
  );
}

export default Main;
