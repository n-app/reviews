// client/src/js/actions/index.js

import { UPDATE_STATE } from '../constants/actionTypes';


export default {
  updateState: state => ({ type: UPDATE_STATE, state }),
};
