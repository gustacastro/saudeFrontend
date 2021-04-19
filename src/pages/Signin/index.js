import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import loginlogo from '../../assets/loginlogo.png';

import { Container } from './styles';

function Signin() {
  function handleSubmite(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <aside className="left">
        <img src={loginlogo} alt="img" />
      </aside>
      <aside className="right">
        <h1>Área de Acesso</h1>

        <Form autoComplete="off" onSubmit={handleSubmite}>
          <Input className="userimg" name="username" placeholder="Usuário" />
          <Input
            className="password"
            name="password"
            type="password"
            placeholder="Senha"
          />
          <button type="submit">Acessar</button>
          <Link to="/register">Não tenho conta</Link>
        </Form>
      </aside>
    </Container>
  );
}

export default Signin;
