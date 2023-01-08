/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { StyledLabel } from './Label.styled';

const Label = ({ children = '' }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
