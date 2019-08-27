const initialState = {
  counter: 0,
  results: [],
  value:11,
};

const reducer = (state = initialState, action) => {
  if (action.type) {
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          counter: state.counter + 1
        };
      case 'DECREMENT':
        return {
          ...state, counter: state.counter - 1
        };
      case 'ADD':
        return {
          ...state, counter: state.counter + action.val
        };
      case 'SUBTRACT':
        return {
          ...state, counter: state.counter - action.val
        };
      case 'STORE_RESULT':
        {
          console.log(`Storing result... ${state.counter}`);
          return {
          ...state,
          results : state.results.concat({id: new Date, value: state.counter})
        };}
      case 'DELETE_RESULT':
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
      default:
        return state;
    }
  }
  return state;
};

export default reducer;
