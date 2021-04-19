import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul>
            <li>
              <Link to="/">Principal</Link>
            </li>
            <li>
              <Link to="/">Telefones</Link>
            </li>
            <li>
              <Link to="/">Documentos</Link>
            </li>
            <li>
              <Link to="/">Links</Link>
            </li>
            <li>
              <Link to="/">Contatos</Link>
            </li>
            <li>
              <Link to="/">Imprimir</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Link id="linkRegister" to="/register">
            Registro
          </Link>
          <Link id="linkLogin" to="login">
            Acessar
            <br />
            Conta
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
