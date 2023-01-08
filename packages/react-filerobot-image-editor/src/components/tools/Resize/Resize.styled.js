/** External Dependencies */
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/TextField';

const StyledResizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  width: 100%;
`;

const StyledOperationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
`;

const StyledResizeInput = styled(Input)`
  width: 70px;
`;

const StyledRatioLockIcon = styled(IconButton)`
  margin-right: 16px;
`;

const StyledXLabel = styled.div`
  margin: 0 5px;
  font-size: 14px;
  line-height: 40px;
`;

export {
  StyledResizeWrapper,
  StyledOperationWrapper,
  StyledResizeInput,
  StyledRatioLockIcon,
  StyledXLabel,
};
