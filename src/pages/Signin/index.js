import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import loginlogo from '../../assets/loginlogo.png';

import { Container } from './styles';

const schema = Yup.object().shape({
  username: Yup.string().required('Usuário é obrigatório.'),
  password: Yup.string().required('Senha é obrigatória.'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ username, password }) {
    dispatch(signInRequest(username, password));
  }

  return (
    <Container>
      <aside className="left">
        <img src={loginlogo} alt="img" />
      </aside>
      <aside className="right">
        <h1>Área de Acesso</h1>

        <Form autoComplete="off" onSubmit={handleSubmit} schema={schema}>
          <Input className="userimg" name="username" placeholder="Usuário" />
          <Input
            className="password"
            name="password"
            type="password"
            placeholder="Senha"
          />
          <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
          <Link to="/register">Não tenho conta</Link>
        </Form>
      </aside>
    </Container>
  );
}
