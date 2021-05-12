/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import H2 from '@material-tailwind/react/Heading2';
import api from '../../services/api';

import { Container } from './styles';

export default function Phones() {
  const [sector, setSector] = useState([]);
  const [unity, setUnity] = useState([]);
  const [util, setUtil] = useState([]);

  const listPhones = async () => {
    try {
      const { data } = await api.get('/phones');
      setSector(data?.sector?.rows);
      setUnity(data?.unity?.rows);
      setUtil(data?.util?.rows);
    } catch (error) {
      toast.error('Erro de conexão com o servidor!');
    }
  };

  useEffect(() => {
    listPhones();
  }, []);

  return (
    <Container>
      <H2 color="lightBlue">Telefones</H2>
      <div className="background">
        <div className="table">
          <h1>Ramais</h1>
          {sector.map((info, index) => (
            <div className="line" key={index}>
              <span>{info.name}</span>
              <span>{info.phone}</span>
            </div>
          ))}
        </div>
        <div className="table">
          <h1>Unidades</h1>
          {unity.map((info, index) => (
            <div className="line" key={index}>
              <span>{info.name}</span>
              <span>{info.phone}</span>
            </div>
          ))}
        </div>
        <div className="table">
          <h1>Úteis</h1>
          {util.map((info, index) => (
            <div className="line" key={index}>
              <span>{info.name}</span>
              <span>{info.phone}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
