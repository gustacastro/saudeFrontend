/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Painel, LeftSide } from './styles';

export default function Links() {
  const [linksA, setLinks] = useState([]);

  const listDocs = async () => {
    try {
      const { data } = await api.get('/linksnormal');
      setLinks(data?.links.rows);
    } catch (error) {
      toast.error('Erro de conexão com o servidor!');
    }
  };

  useEffect(() => {
    listDocs();
  }, []);

  return (
    <Container>
      <h1>Links</h1>
      <Painel>
        {linksA.map((info, index) => (
          <div key={index}>
            <LeftSide>
              <img src={info.logo.url} alt="" />
              <div className="divright">
                <span>{info.name}</span>
                <a
                  href={`${info.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir para site
                </a>
              </div>
            </LeftSide>
          </div>
        ))}
      </Painel>
    </Container>
  );
}
