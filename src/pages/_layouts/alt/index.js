import React from 'react';
import PropTypes from 'prop-types';

import HeaderAlt from '../../../components/HeaderAlt';

import { Wrapper } from './styles';

export default function mainLayout({ children }) {
  return (
    <Wrapper>
      <HeaderAlt />
      {children}
    </Wrapper>
  );
}

mainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
