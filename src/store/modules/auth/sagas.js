import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, 'sessions', {
      username,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    if (!user.admin) {
      history.push('/ndashboard');
    } else {
      history.push('/adashboard');
    }
  } catch (err) {
    yield put(signFailure());
    toast.error('Erro na autenticação, verifique seus dados.');
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
