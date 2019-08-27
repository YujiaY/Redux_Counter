const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  counter: 0
}
//reducers
const rootReducer = (state = initialState, action) => {
  if (action.type) {
    switch (action.type) {
      case 'INC_COUNTER': return {...state, counter: state.counter + 1};
      case 'ADD_COUNTER': return {...state, counter: state.counter + action.value};
      default:
        return state;
    }
  }
  return state;
};

//store
const store = createStore(rootReducer);

//Subscription
store.subscribe(() => {
  console.log('[Subscription]:', store.getState());
})

// console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
// console.log(store.getState());

