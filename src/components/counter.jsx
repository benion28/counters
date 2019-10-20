import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        // value : this.props.counter.value,
        // tags : [ "tag1", "tag2", "tag3" ]
     }
    render() { 

        console.log("Counter - Rendered");
    
        return (
            <React.Fragment>
                <div>
                <span  className = {this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick = {() => this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-sm">+</button>
                <button onClick = {() => this.props.onDecrement(this.props.counter)} className = "btn btn-secondary btn-sm m-2">-</button>
				<button onClick = {() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm">Delete</button>
                </div>
            </React.Fragment>
        );
    }


    // handleIncrement = products => {
    //     console.log(products);
    //     this.setState( { value : this.state.value +1} );
    // }

    componentDidUpdate (prevProps, prevState) {
		console.log("Previous Props", prevProps);
		console.log("Previous State", prevState);
		/*if (prevProps.counters.value !== props.counters.value) {
		Perhaps we can make an Ajax call from the server 
		}*/
	}


    componentWillUnmount () {
		console.log("Counter - Unmounted");
		}

    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        var number = value;
        if (number < 1) {
            number = 0;
            return <h6> Zero </h6>;
        }
        else {
            return number;
        }
        // return value === 0 ? <h6> Zero </h6> : value;
    }
}
 
export default Counter;