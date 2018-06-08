import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../css/reviews.css';
import Header from './header';
import Rates from './rates';
import ReviewList from './reviewList';
import { selectARoom } from '../actions/index';

const mapStateToProps = state => ({
  roomIsFetching: state.roomIsFetching,
  roomHasErrored: state.roomHasErrored,
  numberReviewsPerPage: state.numberReviewsPerPage,
  roomId: state.roomId,
});

const mapDispatchToProps = dispatch => ({
  selectARoom: (roomId, numberReviewsPerPage) => {
    dispatch(selectARoom(roomId, numberReviewsPerPage));
  },
});

let timeout;

class Reviews extends React.Component {
  componentDidMount() {
    this.props.selectARoom(this.props.roomId, this.props.numberReviewsPerPage);
  }

  render() {
    if (this.props.roomHasErrored) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(
        this.props.selectARoom.bind(this, this.props.roomId, this.props.numberReviewsPerPage),
        5000,
      );
      return <div>Fetching Room Error.<br />Try later</div>;
    }
    if (this.props.roomIsFetching) {
      return <div>Fetching Room Info.</div>;
    }
    return (
      <div>
        <Header />
        <Rates />
        <ReviewList />
      </div>
    );
  }
}

Reviews.propTypes = {
  roomHasErrored: PropTypes.bool.isRequired,
  roomIsFetching: PropTypes.bool.isRequired,
  roomId: PropTypes.number.isRequired,
  numberReviewsPerPage: PropTypes.number.isRequired,
  selectARoom: PropTypes.func.isRequired,
};

const ConnectedReviews = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ConnectedReviews;
