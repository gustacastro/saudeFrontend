/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Users } from './styles';

export default function Contact() {
  const [contactA, setContact] = useState([]);

  const listDocs = async () => {
    try {
      const { data } = await api.get('/contacts');
      setContact(data?.contact.rows);
    } catch (error) {
      toast.error('Erro de conexão com o servidor!');
    }
  };

  useEffect(() => {
    listDocs();
  }, []);

  return (
    <Container>
      <h1>Contatos</h1>

      <div>
        {contactA.map((info, index) => (
          <Users key={index}>
            <div className="separete">
              <div>
                <img src={info.avatar.url} alt="" />
              </div>
              <div className="div2">
                <span>{info.name}</span>
                <span>{info.phone}</span>
                <span>{info.email}</span>
              </div>
            </div>
          </Users>
        ))}
      </div>
    </Container>
  );
}
