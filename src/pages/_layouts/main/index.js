import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';

import { Wrapper } from './styles';

export default function mainLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

mainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
