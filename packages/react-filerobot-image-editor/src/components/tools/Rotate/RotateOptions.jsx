/** External Dependencies */
import React from 'react';
import Slider from 'components/common/Slider';
import RotationLeft from '@scaleflex/icons/rotation-left';
import RotationRight from '@scaleflex/icons/rotation-right';

/** Internal Dependencies */
import { useDebouncedCallback, useStore } from 'hooks';
import { CHANGE_ROTATION, SET_RESIZE } from 'actions';
import restrictNumber from 'utils/restrictNumber';
import getSizeAfterRotation from 'utils/getSizeAfterRotation';
import { TOOLS_IDS } from 'utils/constants';
import ToolsBarItemButton from 'components/ToolsBar/ToolsBarItemButton';

const marks = (() => {
  const arr = [];
  for (let i = -180; i <= 180; i += 60) {
    arr.push({
      value: i,
      label: `${i}°`,
    });
  }
  return arr;
})();

const RotateOptions = () => {
  const {
    dispatch,
    adjustments: { rotation = 0 },
    resize = {},
    config,
  } = useStore();
  const rotateConfig = config[TOOLS_IDS.ROTATE];

  const changeRotation = useDebouncedCallback((newRotation) => {
    const rotationAngle = restrictNumber(newRotation, -180, 180);

    dispatch({
      type: CHANGE_ROTATION,
      payload: {
        rotation: rotationAngle,
      },
    });

    if (resize.width && resize.height) {
      const sizeAfterRotation = getSizeAfterRotation(
        resize.width,
        resize.height,
        rotationAngle,
      );
      dispatch({
        type: SET_RESIZE,
        payload: {
          width: sizeAfterRotation.width,
          height: sizeAfterRotation.height,
        },
      });
    }
  }, 20);

  const changeRotationButtonPositive = () => {
    const newAngle = rotation + rotateConfig.angle;
    changeRotation(newAngle);
  };
  const changeRotationButtonNegative = () => {
    const newAngle = rotation - rotateConfig.angle;
    changeRotation(newAngle);
  };

  if (rotateConfig.componentType === 'buttons') {
    return (
      <>
        <ToolsBarItemButton
          className="FIE_rotate_button_left"
          id={TOOLS_IDS.IMAGE}
          label={`-${rotateConfig.angle}°`}
          Icon={RotationLeft}
          onClick={changeRotationButtonNegative}
        />
        <ToolsBarItemButton
          className="FIE_rotate_button_right"
          id={TOOLS_IDS.IMAGE}
          label={`+${rotateConfig.angle}°`}
          Icon={RotationRight}
          onClick={changeRotationButtonPositive}
        />
      </>
    );
  }

  return (
    <Slider
      className="FIE_rotate-slider"
      min={-180}
      max={180}
      value={rotation}
      step={1}
      width="250px"
      // angle={rotateConfig.angle || 90}
      marks={marks}
      onChange={changeRotation}
      style={{ marginBottom: 20 }}
    />
  );
};

export default RotateOptions;
