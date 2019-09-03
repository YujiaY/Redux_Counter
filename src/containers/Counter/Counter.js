import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions'
import * as actionCreators from '../../store/actions/actions'

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
    ctr: state.ctrReducer.counter,
    storedResults: state.resReducer.results,
    counterValue: state.difReducer.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: (counterValue) => dispatch(actionCreators.add(counterValue)),
    onSubtractCounter: (counterValue) => dispatch(actionCreators.subtract(counterValue)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    onInputChange: (inputValue) => dispatch(actionCreators.diffChange(inputValue)),
    onSubmitInputChange: (submitValue,submitEvent) => dispatch(
      actionCreators.diffSubmit(submitValue,submitEvent)
    )
  };
};

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
