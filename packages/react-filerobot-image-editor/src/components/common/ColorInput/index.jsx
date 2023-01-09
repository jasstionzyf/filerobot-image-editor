/** External Dependencies */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';

/** Internal Dependencies */
import { useStore } from 'hooks';
import { SET_LATEST_COLOR } from 'actions';
import { StyledColorPicker, StyledPickerTrigger } from './ColorInput.styled';

const pinnedColorsKey = 'FIE_pinnedColors';

const ColorInput = ({ onChange, color }) => {
  const {
    selectionsIds = [],
    config: { annotationsCommon = {} },
    dispatch,
    latestColor,
  } = useStore();
  const [anchorEl, setAnchorEl] = useState();
  const [currentColor, setCurrentColor] = useState(
    () => latestColor || color || annotationsCommon.fill,
  );
  const [pinnedColors, setPinnedColors] = useState(
    window?.localStorage
      ? JSON.parse(localStorage.getItem(pinnedColorsKey) || '[]')
      : [],
  );

  const changePinnedColors = (newPinnedColors) => {
    if (!window?.localStorage) {
      return;
    }
    const localStoragePinnedColors =
      window.localStorage.getItem(pinnedColorsKey);
    if (JSON.stringify(newPinnedColors) !== localStoragePinnedColors) {
      const maxOfSavedColors = 9;
      const pinnedColorsToSave = newPinnedColors.slice(-maxOfSavedColors);
      window.localStorage.setItem(
        pinnedColorsKey,
        JSON.stringify(pinnedColorsToSave),
      );
      setPinnedColors(pinnedColorsToSave);
    }
  };

  const changeColor = (_newColorHex, rgba, newPinnedColors) => {
    setCurrentColor(rgba);
    onChange(rgba);
    changePinnedColors(newPinnedColors);

    if (latestColor !== rgba) {
      dispatch({
        type: SET_LATEST_COLOR,
        payload: {
          latestColor: rgba,
        },
      });
    }
  };

  const togglePicker = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };

  useEffect(() => {
    const colorToSet = (selectionsIds.length === 0 && latestColor) || color;
    setCurrentColor(colorToSet);
    onChange(colorToSet);
  }, [color, selectionsIds]);

  return (
    <>
      <StyledPickerTrigger
        className="FIE_color-picker-triggerer"
        onClick={togglePicker}
        $color={currentColor}
        onChange={onChange}
      />
      <Popover
        className="FIE_color-picker"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClick={togglePicker}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <StyledColorPicker
          onChange={changeColor}
          defaultColor={currentColor}
          pinnedColors={pinnedColors}
          showTransparentColor
        />
      </Popover>
    </>
  );
};

ColorInput.defaultProps = {
  color: undefined,
};

ColorInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default ColorInput;
