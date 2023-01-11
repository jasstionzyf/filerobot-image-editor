/** External Dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';

/** Internal Dependencies */
import { SET_FEEDBACK } from 'actions';
import { useStore } from 'hooks';
// import { FEEDBACK_STATUSES } from 'utils/constants';

const defaultAnchorOrigin = {
  horizontal: 'center',
  vertical: 'bottom',
};

// const ERROR_TO_ROBOT_STATUS = {
//   [FEEDBACK_STATUSES.ERROR]: 'sad',
//   [FEEDBACK_STATUSES.WARNING]: 'worried',
// };

const FeedbackPopup = ({ anchorOrigin }) => {
  const { feedback = {}, dispatch } = useStore();

  if (!feedback.message) {
    return null;
  }

  const onClose = () => {
    dispatch({
      type: SET_FEEDBACK,
      payload: {
        feedback: {},
      },
    });
  };

  return (
    <Popover
      anchorEl={document.body}
      className="FIE_feedback-robot"
      anchorOrigin={anchorOrigin}
      transitionDuration={feedback.duration ?? 5000}
      open={Boolean(feedback.message)}
      // status={ERROR_TO_ROBOT_STATUS[feedback.status || FEEDBACK_STATUSES.ERROR]}
      onClose={onClose}
    >
      {feedback.message}
    </Popover>
  );
};

FeedbackPopup.defaultProps = {
  anchorOrigin: defaultAnchorOrigin,
};

FeedbackPopup.propTypes = {
  anchorOrigin: PropTypes.instanceOf(Object),
};

export default FeedbackPopup;
