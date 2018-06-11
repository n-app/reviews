import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { queryReview } from '../actions/index';
import { calculateOverallRates, makeStarElements } from '../../../../helpers/clientHelpers';
import '../../css/header.css';

const starClassNames = {
  containerClass: 'star-ratings overall-rating',
  fullStarClass: 'full-star overall-rating',
  pointFiveClass: 'point-five-star overall-rating',
  zeroStarClass: 'zero-star overall-rating',
  halfStarClass: 'half-star overall-rating',
  hiddenHalfStarClass: 'hidden-half-star overall-rating',
};

const mapStateToProps = state => ({
  roomId: state.roomId,
  roomTotalReviewNumber: state.roomTotalReviewNumber,
  overallRating: calculateOverallRates(state.overallRating),
  numberReviewsPerPage: state.numberReviewsPerPage,
  queryInput: state.queryInput,
  querySortBy: state.querySortBy,
});

const mapDispatchToProps = dispatch => ({
  queryReview: (roomId, queryInput, querySortBy, numberReviewsPerPage) => {
    dispatch(queryReview(roomId, queryInput, querySortBy, numberReviewsPerPage));
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.queryInput,
      inputFocus: false,
    };

    this.queryReview = this.props.queryReview.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleKeyDown(event) {
    if (event.which === 13) {
      this.queryReview(
        this.props.roomId,
        event.target.value,
        this.props.querySortBy,
        this.props.numberReviewsPerPage,
      );
    }
  }

  render() {
    return (
      <div className="header-banner">
        <h4 className="review-total">
          <span>{this.props.roomTotalReviewNumber} Reviews</span>
          <div className="total-rate-star">{makeStarElements(this.props.overallRating / 5, 5, starClassNames)}</div>
        </h4>
        <div className={`search-bar${this.state.inputFocus ? ' darker' : ''}`}>
          <div className="search-icon">
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              focusable="false"
            >
              <path
                d="m10.4 18.2
                c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6
                m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7
                v.1l5 5
                c .3.3.8.3 1.1 0
                s .4-.8.1-1.1"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search reviews"
              value={this.state.input}
              onChange={this.handleSearchChange}
              onKeyDown={this.handleKeyDown}
              onFocus={() => { this.setState({ inputFocus: true }); }}
              onBlur={() => { this.setState({ inputFocus: false }); }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  roomId: PropTypes.number.isRequired,
  roomTotalReviewNumber: PropTypes.number.isRequired,
  overallRating: PropTypes.number.isRequired,
  numberReviewsPerPage: PropTypes.number.isRequired,
  queryInput: PropTypes.string.isRequired,
  querySortBy: PropTypes.arrayOf(PropTypes.any).isRequired,
  queryReview: PropTypes.func.isRequired,
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default ConnectedHeader;
