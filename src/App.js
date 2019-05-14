import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  //Start Life Cycle method
  constructor() {
    super();
    console.log('1. Constructor method is called...');
  }

  componentDidMount() {
    console.log('3. Component did mount method is called...');
  }

  componentDidUpdate() {
    console.log('4. Component did update method is called...');
  }

  componentWillUnmount(){
    console.log('5. Component will unmount method is called...');
  }
  //End Life Cycle method

  //handleDelete = (counterId) => { //As there is one parameter
  handleDelete = counterId => {
    console.log('Event Handler Called...', counterId);
    const counters = this.state.counters.filter(counter => counter.id !== counterId); //Update the counter excluding the current one
    //this.setState({ counters : counters }); // As both key and value are same
    this.setState({ counters }); //Update the state with the new counter so that react can update the state
  };

  //To Reset the counter
  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters });
    }
  };
  render() {
    
    //Render method renders the component along with the child component recursively.
    console.log('2. Render method is called...');

    return (
      <React.Fragment>
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
          <main className="container">
          <Counters 
            counters={this.state.counters}
            onDelete={this.handleDelete} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement} 
            onReset={this.handleReset}/>
          </main>
      </React.Fragment>
    );
  }
}
export default App;
