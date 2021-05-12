/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import fileDownload from 'js-file-download';
import H2 from '@material-tailwind/react/Heading2';
import H6 from '@material-tailwind/react/Heading6';
import api from '../../services/api';

import { Container, Painel, LeftSide } from './styles';

export default function Documents() {
  const [docsA, setDocs] = useState([]);

  const listDocs = async () => {
    try {
      const { data } = await api.get('/documentsnormal');
      setDocs(data?.docs.rows);
    } catch (error) {
      toast.error('Erro de conexão com o servidor!');
    }
  };

  const handleDownload = (url, filename) => {
    api
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  useEffect(() => {
    listDocs();
  }, []);

  return (
    <Container>
      <H2 color="lightBlue">Documentos</H2>
      <div className="background">
        <Painel>
          {docsA.map((info, index) => (
            <div key={index}>
              <LeftSide>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      handleDownload(`${info.file.url}`, `${info.name}`);
                    }}
                  >
                    <span className="material-icons">save_alt</span>
                  </button>
                  <a href={info.file.url} target="_blank" rel="noreferrer">
                    <span className="material-icons">print</span>
                  </a>
                </div>
                <div className="div2">
                  <H6 color="blueGray">{info.name}</H6>
                </div>
              </LeftSide>
            </div>
          ))}
        </Painel>
      </div>
    </Container>
  );
}
