/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import fileDownload from 'js-file-download';
import api from '../../services/api';

import { Container, Painel, LeftSide } from './styles';

import save from '../../assets/save.svg';
import printer from '../../assets/printer.svg';

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
      <h1>Documentos</h1>
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
                    <img src={save} alt="Download" width={22} />
                  </button>
                  <a href={info.file.url} target="_blank" rel="noreferrer">
                    <img src={printer} alt="Imprimir" />
                  </a>
                </div>
                <div className="div2">
                  <span>{info.name}</span>
                </div>
              </LeftSide>
            </div>
          ))}
        </Painel>
      </div>
    </Container>
  );
}
