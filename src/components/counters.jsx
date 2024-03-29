import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    // state = { 
    //     counters : [
    //         {id: 1, value: 0},
    //         {id: 2, value: 0},
    //         {id: 3, value: 0},
    //         {id: 4, value: 0}
    //     ]
    //  };

    render() { 

        console.log("Counters - Rendered");

        const { counters, onReset, onDelete, onIncrement, onDecrement } = this.props;

        return ( 
            <div>
                <button onClick = {onReset} className = "btn btn-primary btn-sm m-2">Reset</button>
                {counters.map( counter => ( <Counter onDelete = {onDelete} onIncrement = {onIncrement} onDecrement = {onDecrement} counter = { counter } key = { counter.id} >
                <h3> Counter #{ counter.id } </h3>
                </Counter>))}
            </div>
         );
    }

    // handleReset = () => {
	// 	const counters = this.state.counters.map(c => {
	// 			c.value = 0;
	// 			return c; 
	// 		});
	// 	this.setState( { counters } );
	// };
    
    // handleIncrement = counter => {
	// 	const counters = [...this.state.counters];
	// 	const index = counters.indexOf(counter);
	// 	counters[index] = { ...counter };
	// 	counters[index].value++;
	// 	this.setState( { counters } );
	// };

    
    // handleDelete = counterId => {
    //     const counters = this.state.counters.filter(c => c.id !== counterId);
	// 	this.setState( { counters } );
    // }
}
 
export default Counters;