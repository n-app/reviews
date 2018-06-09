import React from 'react';
import PropTypes from 'prop-types';
import { getFullMonth, makeStarElements } from '../../../../helpers/clientHelplers';
import '../../css/reviewListEntry.css';

const starClassNames = {
  containerClass: 'star-ratings user-rating',
  fullStarClass: 'full-star user-rating',
  pointFiveClass: 'point-five-star user-rating',
  zeroStarClass: 'zero-star user-rating',
  halfStarClass: 'half-star user-rating',
  hiddenHalfStarClass: 'hidden-half-star user-rating',
};

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
      <div>{makeStarElements(props.review.aggregateRate / 5, 5, starClassNames)}</div>
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
