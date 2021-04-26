import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import registerpage from '../../assets/registerpage.png';

export default function Signup() {
  return (
    <Container>
      <div>
        <img src={registerpage} alt="" />
      </div>
      <div className="right">
        <span>Novas contas.</span>
        <h1>Pedido de nova conta.</h1>
        <p>
          Para ter acesso ao nosso site, você precisa pedir uma conta ao pessoal
          do T.I. <br /> use o botão abaixo ou use o link a cima em contatos.
        </p>
        <Link to="/">Contatos</Link>
      </div>
    </Container>
  );
}
