/** External Dependencies */
import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';

const StyledModalTitle = styled(DialogTitle)`
  display: flex;
  align-item: center;
  font-size: 20px !important;
  line-height: 20px !important;
  font-weight: 500 !important;
  > span {
    margin-left: 5px;
  }
`;

export { StyledModalTitle };
