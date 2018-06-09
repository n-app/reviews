import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQueryInput } from '../actions/index';
import { calculateOverallRates } from '../../../../helpers/clientHelplers';

const mapStateToProps = state => ({
  roomTotalReviewNumber: state.roomTotalReviewNumber,
  overallRating: calculateOverallRates(state.overallRating),
  queryInput: state.queryInput,
});

const mapDispatchToProps = dispatch => ({
  updateQueryInput: (queryInput) => { dispatch(updateQueryInput(queryInput)); },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.queryInput,
    };

    this.updateQueryInput = this.props.updateQueryInput.bind(this);
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
      this.updateQueryInput(event.target.value);
    }
  }

  render() {
    return (
      <div className="header-banner">
        <h2 className="review-total">{this.props.roomTotalReviewNumber} Reviews</h2>
        <h2 className="rate-star">
          {Math.round(this.props.overallRating * 100) / 100}
        </h2>
        <input
          type="text"
          placeholder="Search reviews"
          className="search-bar"
          value={this.state.input}
          onChange={this.handleSearchChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

Header.propTypes = {
  roomTotalReviewNumber: PropTypes.number.isRequired,
  overallRating: PropTypes.number.isRequired,
  queryInput: PropTypes.string.isRequired,
  updateQueryInput: PropTypes.func.isRequired,
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);
export default ConnectedHeader;
