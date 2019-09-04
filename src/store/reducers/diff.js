import * as actionTypes from '../actions/actions';
import { updateObject}  from "../utility";

const initialState = {
  value:11,
};

const diffReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DIFF_CHANGE: {
      console.log('Input is changing diff... But we are not doing anything for it.');
      return state;
      // return updateObject(state, {value : +action.diffInput});
    };
    case actionTypes.DIFF_SUBMIT:
    {
      action.eventSubmit.preventDefault();
      console.log(`Submitting diff... ${action.diffSubmit}`);
      return updateObject(state, { value : +action.diffSubmit});
    };
    default:
      return state;
  }
};

export default diffReducer;
