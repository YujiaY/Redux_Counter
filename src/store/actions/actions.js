export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';
export const DIFF_CHANGE = 'DIFF_CHANGE';
export const DIFF_SUBMIT = 'DIFF_SUBMIT';

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = (addValue) => {
  return {
    type: ADD,
    val: addValue
  };
};

export const subtract = (subValue) => {
  return {
    type: SUBTRACT,
    val: subValue
  };
};

export const storeResultSync = (res) => {
  return {
    type: STORE_RESULT,
    result: res
  };
};
export const storeResultAsync = (res) => {
  return function (dispatch) {
    setTimeout( () => {
      dispatch(storeResultSync(res))
    }, 2000)
  }
};

export const deleteResult = (resElId) => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId
  };
};

export const diffChange = (diffValue) => {
  return {
    type: DIFF_CHANGE,
    diffInput: diffValue
  };
};
export const diffSubmit = (diffValue, submitEvent) => {
  return {
    type: DIFF_SUBMIT,
    diffSubmit: diffValue,
    eventSubmit: submitEvent
  };
};


