import React from 'react';
import PropTypes from 'prop-types';

import { Container, ContainerTitle } from './styldSection';

const Section = ({ title, children }) => {
  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
