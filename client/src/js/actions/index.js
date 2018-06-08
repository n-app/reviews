// client/src/js/actions/index.js

export default {
  updateState: state => ({ type: 'UPDATE_STATE', state }),
  selectARoom: state => ({ type: 'SELECT_A_ROOM', state }),
  selectAPage: state => ({ type: 'SELECT_A_PAGE', state }),
  updateQueryInput: queryInput => ({ type: 'UPDATE_QUERY_INPUT', queryInput }),
  updateQuerySortBy: querySortBy => ({ type: 'UDPATE_QUERY_SORTBY', querySortBy }),
};
