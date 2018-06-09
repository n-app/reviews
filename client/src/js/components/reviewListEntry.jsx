import React from 'react';
import PropTypes from 'prop-types';
import { getFullMonth } from '../../../../helpers/clientHelplers';

const ReviewListEntry = (props) => {
  const date = new Date(props.review.date);
  return (
    <div className="reviewListEntry">
      <div className="avatar">
        avatar
      </div>
      <div className="name-and-date">
        <span className="username">{props.review.userName}</span>
        <br />
        <span className="review-date">
          {`${getFullMonth(date)} ${date.getFullYear()}`}
        </span>
      </div>
      <div className="review-text">{props.review.text}</div>
    </div>
  );
};

ReviewListEntry.propTypes = {
  review: PropTypes.shape({
    userName: PropTypes.string,
    date: PropTypes.string,
    aggregateRate: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
};

export default ReviewListEntry;
