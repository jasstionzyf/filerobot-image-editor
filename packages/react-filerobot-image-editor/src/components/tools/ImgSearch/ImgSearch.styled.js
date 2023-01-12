/** External Dependencies */
import styled from 'styled-components';
import Input from '@mui/material/TextField';

const StyledImgSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledSearchInput = styled(Input)`
  width: 300px;
`;

const StyledImgsWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex: 1;
  overflow: auto;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 48%;
    > img {
      margin-bottom: 2px;
      max-width: 100%;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export { StyledImgSearchWrapper, StyledSearchInput, StyledImgsWrapper };
