import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '../../assets/logo.png';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content } from './styles';

export default function HeaderAlt() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul>
            <Link to="/">
              <li>Principal </li>
            </Link>

            <Link to="/phones">
              <li>Telefones</li>
            </Link>

            <Link to="/documents">
              <li>Documentos</li>
            </Link>

            <Link to="/links">
              <li>Links</li>
            </Link>

            <Link to="/contacts">
              <li>Contatos</li>
            </Link>

            <Link to="/print">
              <li>Imprimir</li>
            </Link>

            <Link className="covid" to="/">
              <li>COVID</li>
            </Link>
          </ul>
        </nav>

        <aside>
          <Link
            id="linkRegister"
            to={profile.admin ? '/adashboard' : 'ndashboard'}
            onClick={handleSignOut}
          >
            Sair
          </Link>
          <Link id="linkLogin" to="/ndashboard">
            Painel
            <br />
            de Controle
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
