/** External Dependencies */
import styled from 'styled-components';
import Slider from '@mui/material/Slider';

const StyledSlider = styled(Slider)`
  width: ${({ width }) => width || '100px'};
  max-width: ${({ width }) => width || '100px'};
  user-select: none;
  margin-bottom: 24px;

  // marks 距离slider位置
  .MuiSlider-markLabel {
    top: 15px;
  }

  // .SfxSlider-annotation {
  //   font-size: 13px;
  //   line-height: 16px;
  // }
`;

export { StyledSlider };
