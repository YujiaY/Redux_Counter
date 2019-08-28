import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: [],
  value:11,
};

const reducer = (state = initialState, action) => {
  // if (action.type) {
    switch (action.type) {
      case actionTypes.INCREMENT:
        return {
          ...state,
          counter: state.counter + 1
        };
      case actionTypes.DECREMENT:
        return {
          ...state, counter: state.counter - 1
        };
      case actionTypes.ADD:
        return {
          ...state, counter: state.counter + action.val
        };
      case actionTypes.SUBTRACT:{
        console.log('Subtracting...')
        return {
          ...state, counter: state.counter - action.val
        };
      }
      case actionTypes.STORE_RESULT:
        {
          console.log(`Storing result... ${state.counter}`);
          return {
          ...state,
          results : state.results.concat({id: new Date, value: state.counter})
        };}
      case actionTypes.DELETE_RESULT:
        {
          console.log('Deleting result...')
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
        console.log('Submitting diff...');
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
  // }
  // return state;
};

export default reducer;
