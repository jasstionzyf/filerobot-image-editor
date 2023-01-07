/** External Dependencies */
import styled from 'styled-components';
import Label from '@scaleflex/ui/core/label';

const StyledTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100%;
  overflow-y: auto;
  outline: 1px solid blue;

  [data-phone='true'] & {
    display: flex;
    padding: 0;
  }
`;

const StyledTabItem = styled.div(
  ({ theme }) => `
    width: 67px;
    height: 62px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background: ${theme.palette['bg-primary']};
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;

    [data-phone='true'] & {
      margin-bottom: 0;
      height: 50px;
      border-radius: 0;
    }

    &,
    * {
      cursor: pointer;
    }

    &:hover {
      background: ${theme.palette['bg-primary-active']};
    }

    &[aria-selected='true'] {
      background: ${theme.palette['bg-primary-active']};

      * {
        color: ${theme.palette['accent-primary-active']};
      }
    }
  `,
);

const StyledTabItemLabel = styled(Label)`
  margin-top: 6px;
  font-size: 11px;
  line-height: 12px;
  text-align: center;

  [data-phone='true'] & {
    font-size: 10px;
  }
`;

export { StyledTabs, StyledTabItem, StyledTabItemLabel };
