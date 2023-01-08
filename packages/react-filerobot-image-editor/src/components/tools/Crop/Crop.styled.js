/** External Dependencies */
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Label from 'components/common/Label';

const StyledOpenMenuButton = styled(IconButton)`
  margin: 0 0 0 6px !important;
  padding: 0 !important;
`;

const StyledMenuItemIcon = styled.div`
  margin-right: 6px;

  svg,
  span {
    vertical-align: middle;
  }
`;

const StyledRatioDescription = styled(Label)`
  margin-left: 4px;
  cursor: pointer;
`;

export { StyledOpenMenuButton, StyledMenuItemIcon, StyledRatioDescription };
