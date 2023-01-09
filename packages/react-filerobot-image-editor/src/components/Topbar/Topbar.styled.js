/** External Dependencies */
import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Label from 'components/common/Label';
import Select from '@mui/material/Select';

const StyledTopbar = styled.div`
  padding: 12px 12px 8px 12px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 48px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 1px solid gold;
  ${({ reverseDirection }) =>
    reverseDirection ? 'flex-direction: row-reverse' : ''};

  [data-phone='true'] & {
    padding: 6px 6px 4px 6px;
  }
  overflow: auto;
`;

const StyledHistoryButtonsWrapper = styled.div`
  display: flex;
  margin: 0 4px;
  column-gap: 4px;
  align-items: center;
`;

const StyledHistoryButton = styled(IconButton)`
  margin: ${({ margin }) => margin ?? '0 4px'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  padding: 2px !important;
`;

const StyledDimensionsLabel = styled(Label)`
  flex-shrink: 0;
`;

const StyledSmallButton = styled(IconButton)`
  width: 20px;
  height: 20px;
  margin: 0 ${(props) => props.horizontalMargin ?? '4px'};
  padding: 4px !important;
`;

const StyledFlexCenterAlignedContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ reverseDirection }) =>
    reverseDirection ? 'flex-direction: row-reverse' : ''};
`;

const StyledZoomPercentageLabel = styled.div`
  color: rgba(118, 129, 132, 1);
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
`;

const StyledBackButtonLabel = styled.span`
  font-size: 11px;
  line-height: 12px;
`;

const StyledCloseOrBackButton = styled(IconButton)`
  padding: 0 !imporant;
  z-index: 111;
`;

const StyledSaveButton = styled(Button)`
  padding: 4px 12px;
`;

const StyledFileNameInput = styled(TextField)`
  width: 170px;
`;

const StyledFileExtensionSelect = styled(Select)`
  width: 90px;
  margin-left: 4px;
`;

const StyledQualityWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const StyledResizeOnSave = styled.div`
  margin-top: 8px;
  width: 100%;
`;

export {
  StyledTopbar,
  StyledFlexCenterAlignedContainer,
  StyledHistoryButton,
  StyledSmallButton,
  StyledZoomPercentageLabel,
  StyledBackButtonLabel,
  StyledCloseOrBackButton,
  StyledSaveButton,
  StyledFileNameInput,
  StyledFileExtensionSelect,
  StyledQualityWrapper,
  StyledResizeOnSave,
  StyledDimensionsLabel,
  StyledHistoryButtonsWrapper,
};
