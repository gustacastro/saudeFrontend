import React, { useState } from 'react';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavItem from '@material-tailwind/react/NavItem';
import Icon from '@material-tailwind/react/Icon';

import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Container>
      <Navbar color="blue" navbar>
        <NavbarContainer>
          <NavbarWrapper>
            <NavbarBrand>
              <Link to="/" className="center">
                <span className="material-icons red">favorite</span>
                Saúde
              </Link>
            </NavbarBrand>
            <NavbarToggler
              color="white"
              onClick={() => setOpenNavbar(!openNavbar)}
              ripple="light"
            />
          </NavbarWrapper>

          <NavbarCollapse open={openNavbar}>
            <Nav>
              <Link to="/">
                <NavItem ripple="light">
                  <Icon name="home" size="xl" />
                  Principal
                </NavItem>
              </Link>
              <Link to="/documents">
                <NavItem ripple="light">
                  <Icon name="description" size="xl" />
                  Documentos
                </NavItem>
              </Link>
              <Link to="/phones">
                <NavItem ripple="light">
                  <Icon name="phone_in_talk" size="xl" />
                  Telefones
                </NavItem>
              </Link>
              <Link to="/links">
                <NavItem ripple="light">
                  <Icon name="laptop" size="xl" />
                  Links
                </NavItem>
              </Link>
              <Link to="/contacts">
                <NavItem ripple="light">
                  <Icon name="contact_phone" size="xl" />
                  Contatos
                </NavItem>
              </Link>
              <Link to="/print">
                <NavItem ripple="light">
                  <Icon name="print " size="xl" />
                  Imprimir
                </NavItem>
              </Link>
              <Link to="/">
                <NavItem ripple="light">
                  <Icon name="coronavirus" size="xl" color="red" />
                  COVID
                </NavItem>
              </Link>
            </Nav>
            <Link to="/login" className="dashboard">
              <NavItem ripple="light">
                <Icon name="space_dashboard" size="xl" />
                Painel de Controle
              </NavItem>
            </Link>
          </NavbarCollapse>
        </NavbarContainer>
      </Navbar>
    </Container>
  );
}
