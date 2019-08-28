import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions'

class Counter extends Component {
    state = {
    }
    render () {
        return (
            <div>
              <p>Old Counter:</p>
              <CounterOutput value={this.state.counter} />
              <p>New Counter:</p>

                <div>
                  <form onSubmit ={(e)=> this.props.onSubmitInputChange(this.refs.diffInput.value,e)}>

                  <label htmlFor="">Diff: </label>
                      <input type="text"
                             placeholder="Enter the diff value here"
                             ref="diffInput"
                             onChange={e => {
                               this.props.onInputChange(e.target.value)
                             }}
                      />
                    <input type="submit" value="Submit Diff" />
              </form>
            </div>
              <CounterOutput value={this.props.ctr} />

                <CounterControl label="Increment"
                                clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement"
                                clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add "
                                val = {this.props.counterValue}
                                clicked={ () =>this.props.onAddCounter(this.props.counterValue)} />
                <CounterControl label="Subtract "
                                val = {this.props.counterValue}
                                clicked={ () =>this.props.onSubtractCounter(this.props.counterValue)}  />
                <div>
                  <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                  <ul>
                    {this.props.storedResults.map(e => (
                      <li key={e.id} onClick={() => this.props.onDeleteResult(e.id) }>{e.value}</li>
                    ))}
                  </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
    counterValue: state.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onAddCounter: (counterValue) => dispatch({type: actionTypes.ADD, val: counterValue}),
    onSubtractCounter: (counterValue) => dispatch({type: actionTypes.SUBTRACT, val: counterValue}),
    onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id}),
    onInputChange: (inputValue) => dispatch({type: actionTypes.DIFF_CHANGE, diffInput: inputValue }),
    onSubmitInputChange: (submitValue,submitEvent) => dispatch(
      {
        type: actionTypes.DIFF_SUBMIT,
        diffSubmit: submitValue,
        eventSubmit: submitEvent
      })
  };
};

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
