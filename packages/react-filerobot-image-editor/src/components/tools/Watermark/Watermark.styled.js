/** External Dependencies */
import styled from 'styled-components';

const StyledWatermarkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;

  ${({ noWrap }) => (noWrap ? 'margin-left: 4px; flex-wrap: nowrap;' : '')};
`;

const StyledControlsWrapper = styled.div`
  margin-bottom: 8px;
`;

const StyledWatermarkGalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledWatermarkGalleryItem = styled.div(
  ({ theme }) => `
    margin: 10px 3%;
    padding: 4px;
    border: 1px solid ${theme.palette['borders-primary']};
    width: 44%;
    height: 32px;
    text-align: center;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;

    :hover {
      background: ${theme.palette['bg-primary-active']};
    }

    &[aria-selected='true'] {
      background: ${theme.palette['bg-primary-active']};
      border-color: ${theme.palette['accent-primary-active']};
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  `,
);

export {
  StyledWatermarkWrapper,
  StyledControlsWrapper,
  StyledWatermarkGalleryWrapper,
  StyledWatermarkGalleryItem,
};
