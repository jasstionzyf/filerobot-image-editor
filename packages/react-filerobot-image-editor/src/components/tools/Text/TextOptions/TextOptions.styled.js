/** External Dependencies */
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';

const StyledFontFamilySelect = styled(Select)`
  width: 88px;
  margin: 0 4px;
`;

const StyledFontSizeInput = styled(TextField)`
  width: 70px;
  margin: 0 4px;
`;

export { StyledFontFamilySelect, StyledFontSizeInput };
