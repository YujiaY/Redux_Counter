import * as actionTypes from '../actions/actions';
import {updateObject} from '../utility';

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  //One way to remove an item in array.
  // const id = action.id;
  // const newArray = [...state.results];
  // newArray.splice(id, 1);

  //Here is another way:
  const updatedArray = state.results.filter(result => result.id !== action.resultElId);
  return updateObject(state, {results: updatedArray})
}

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {results : state.results.concat({id: new Date, value: action.result})});
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};

export default resultReducer;
