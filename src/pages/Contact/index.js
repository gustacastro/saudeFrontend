/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Card from '@material-tailwind/react/Card';
import Image from '@material-tailwind/react/Image';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Paragraph from '@material-tailwind/react/Paragraph';
import H2 from '@material-tailwind/react/Heading2';

import api from '../../services/api';

import { Container, Painel } from './styles';

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
      <H2 color="lightBlue">Contatos</H2>
      <Painel>
        {contactA.map((info, index) => (
          <div key={index}>
            <Card>
              <Image src={info.avatar.url} alt="Card Image" rounded raised />
              <CardBody />
              <CardFooter>
                <Paragraph color="gray">{info.name}</Paragraph>
                <Paragraph color="gray">{info.phone}</Paragraph>
                <Paragraph color="gray">{info.email}</Paragraph>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Painel>
    </Container>
  );
}
