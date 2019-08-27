import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
      // counter: 0,
      // value: 5,
      // results: [],
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <p>Old Counter:</p>
              <CounterOutput value={this.state.counter} />
              <p>New Counter:</p>

              <CounterOutput value={this.props.ctr} />

                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ () =>this.props.onAddCounter(this.props.counterValue)} />
                <CounterControl label="Subtract 5" clicked={ () =>this.props.onSubtractCounter(this.props.counterValue)}  />
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
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: (counterValue) => dispatch({type: 'ADD', val: counterValue}),
    onSubtractCounter: (counterValue) => dispatch({type: 'SUBTRACT', val: counterValue}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId: id})
  };
};

// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
