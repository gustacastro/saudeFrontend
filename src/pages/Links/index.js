/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import H2 from '@material-tailwind/react/Heading2';

import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H6 from '@material-tailwind/react/Heading6';
import Button from '@material-tailwind/react/Button';

import { Container, Painel } from './styles';
import api from '../../services/api';

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
      <H2 color="lightBlue">Links</H2>
      <Painel>
        {linksA.map((info, index) => (
          <div key={index}>
            <Card>
              <CardImage src={info.logo.url} alt="Card Image" />

              <CardBody>
                <H6 color="gray">{info.name}</H6>
              </CardBody>

              <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                  <a
                    href={`${info.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir para site
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Painel>
    </Container>
  );
}
