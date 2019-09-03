import * as actionTypes from '../actions/actions';

const initialState = {
  value:11,
};

const diffReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DIFF_CHANGE: {
      console.log('Input is changing diff...');
      return {
        ...state,
        // value : +action.diffInput
      }
    }
    case actionTypes.DIFF_SUBMIT:
    {
      action.eventSubmit.preventDefault();
      console.log(`Submitting diff... ${action.diffSubmit}`);
      console.log(action.diffSubmit)
      // console.log(`${action.diffInput}`)
      // this.setState({value: action.target.value});
      return {
        ...state,
        value : +action.diffSubmit
      };
    }
    default:
      return state;
  }
};

export default diffReducer;
