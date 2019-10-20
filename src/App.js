import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters : [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
 };

  render() {
    
    console.log("App - Rendered");

    return ( 
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length} />
				<main className = "container">
					<Counters onDelete = { this.handleDelete } onIncrement = { this.handleIncrement } onDecrement = { this.handleDecrement } onReset = {this.handleReset} counters = { this.state.counters } key = { this.state.counters.id} />
				</main>
      </React.Fragment>
    );
  }

  constructor() {
		super();
		console.log("App - Constructor");
	}
		
	componentDidMount() {
		console.log("App - Mounted");
	}


  handleReset = () => {
		const counters = this.state.counters.map(c => {
				c.value = 0;
				return c; 
			});
		this.setState( { counters } );
	};
    
  handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState( { counters } );
	};  
  
  handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState( { counters } );
	};

    
    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState( { counters } );
    }

}

export default App;
