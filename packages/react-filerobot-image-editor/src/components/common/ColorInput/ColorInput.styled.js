/** External Dependencies */
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

const StyledPickerTrigger = styled.div.attrs(({ $color }) => ({
  style: {
    background:
      $color === 'rgba(0,0,0,0)'
        ? 'repeating-conic-gradient(#5d6d7e 0% 25%, transparent 0% 50%) 50% / 8px 8px'
        : $color,
  },
}))`
  background: #fff;
  border-radius: 2px;
  width: 24px;
  height: 24px;
  border: 2px solid #000;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledColorPicker = styled(SketchPicker)`
  max-width: 212px;
`;

export { StyledPickerTrigger, StyledColorPicker };
