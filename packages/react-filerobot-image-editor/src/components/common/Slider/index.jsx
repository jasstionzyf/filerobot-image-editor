/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/** Internal Dependencies */
import { StyledSlider } from './Slider.styled';

const Slider = ({ onChange, ...props }) => {
  return (
    <StyledSlider
      // annotation=""
      valueLabelDisplay="auto"
      onChange={(_e, val) => (onChange ? onChange(val) : undefined)}
      marks={
        typeof props.min === 'number' && typeof props.max === 'number'
          ? [props.min, props.max].map((v) => ({ value: v, label: v }))
          : []
      }
      {...props}
    />
  );
};

Slider.defaultProps = {
  min: undefined,
  max: undefined,
};

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Slider;
