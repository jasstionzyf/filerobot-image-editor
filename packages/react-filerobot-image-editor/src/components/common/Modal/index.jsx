/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

/** Internal Dependencies */
import { StyledModalTitle } from './Modal.styled';

const Modal = ({
  title,
  Icon,
  onDone,
  onCancel,
  doneLabel,
  cancelLabel,
  isOpened,
  doneButtonStyle,
  doneButtonColor = 'contained',
  cancelButtonColor = 'text',
  children,
  areButtonsDisabled,
  className,
  ...props
}) => {
  return (
    <Dialog className={className} open={isOpened} onClose={onCancel} {...props}>
      <StyledModalTitle>
        {Icon && <Icon size={20} />}
        <span>{title}</span>
      </StyledModalTitle>
      {children && <DialogContent>{children}</DialogContent>}
      <DialogActions>
        <Button
          variant={cancelButtonColor}
          onClick={onCancel}
          size="medium"
          disabled={areButtonsDisabled}
        >
          {cancelLabel}
        </Button>
        <Button
          onClick={onDone}
          size="middle"
          variant={doneButtonColor}
          disabled={areButtonsDisabled}
        >
          {doneLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Modal.defaultProps = {
  isOpened: false,
  doneLabel: 'Yes',
  cancelLabel: 'No',
  doneButtonStyle: {},
  doneButtonColor: 'contained',
  cancelButtonColor: 'outlined',
  children: undefined,
  areButtonsDisabled: false,
  className: undefined,
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.instanceOf(Object).isRequired,
  onDone: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isOpened: PropTypes.bool,
  doneLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  doneButtonStyle: PropTypes.instanceOf(Object),
  doneButtonColor: PropTypes.oneOf(['text', 'contained', 'outlined']),
  cancelButtonColor: PropTypes.oneOf(['text', 'contained', 'outlined']),
  children: PropTypes.node,
  areButtonsDisabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Modal;
