import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateQuerySortBy } from '../actions/index';

const mapStateToProps = state => ({
  accuracy: state.overallRating.accuracy,
  communication: state.overallRating.communication,
  cleanliness: state.overallRating.cleanliness,
  location: state.overallRating.location,
  checkIn: state.overallRating.checkIn,
  value: state.overallRating.value,
});

const mapDispatchToProps = dispatch => ({
  updateQuerySortBy: (querySortBy) => { dispatch(updateQuerySortBy(querySortBy)); },
});

class Rates extends React.Component {
  constructor(props) {
    super(props);
    this.sortBy = null;
    this.rates = [
      [
        ['Accuracy', 'accuracy'],
        ['Communication', 'communication'],
        ['Cleanliness', 'cleanliness'],
      ],
      [
        ['Location', 'location'],
        ['Check-in', 'checkIn'],
        ['Value', 'value'],
      ],
    ];
  }

  render() {
    return (
      <div className="rates-list">
        {/* eslint-disable react/no-array-index-key */
        this.rates.map((column, index) => (
          <div className="rates-column" key={index}>
            {column.map(row => (
              <div className="rate-row" key={row[1]}>
                <div className="rate-label">
                  {row[0]}
                </div>
                <div className="rate-star">
                  {Math.floor(this.props[row[1]] * 100) / 100}
                </div>
              </div>
            ))}
          </div>
        ))
        /* eslint-enable react/no-array-index-key */
        }
      </div>
    );
  }
}

/*
Rates.propTypes = {
  accuracy: PropTypes.number.isRequired,
  communication: PropTypes.number.isRequired,
  cleanliness: PropTypes.number.isRequired,
  location: PropTypes.number.isRequired,
  checkIn: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
*/

const ConnectedRates = connect(mapStateToProps, mapDispatchToProps)(Rates);
export default ConnectedRates;
