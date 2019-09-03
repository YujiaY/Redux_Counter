import * as actionTypes from '../actions/actions';

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
    {
      // console.log(`Storing result... ${action.result}`);
      return {
        ...state,
        results : state.results.concat({id: new Date, value: action.result})
      };}
    case actionTypes.DELETE_RESULT:
    {
      // console.log('Deleting result...')
      //One way to remove an item in array.
      // const id = action.id;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      //Here is another way:
      const updatedArray = state.results.filter(result => result.id !== action.resultElId)
      return {
        ...state,
        results : updatedArray
      }}

    default:
      return state;
  }
};

export default resultReducer;
