import React, { Component } from "react";
import NavBar from "./component/navbar";
import Counters from "./component/counters";
import "./App.css";

class App extends Component {

  state = {
    counters:[
      {id:1, value:0},
      {id:2, value:0},
      {id:3, value:0},
      {id:5, value:0},
      {id:4, value:0}
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(e=>{
      e.value = 0;
      return e;
    });
    this.setState({counters});
  };

  handleIncrement = counter =>{
    const counters = [...this.state.counters];
    const ele = counters.indexOf(counter);
    counters[ele] = {...counter};
    counters[ele].value++;
    this.setState({counters});
  };

  handleDecrement = counter =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  };

  render() {
    return (
        <React.StrictMode>
          <NavBar totalCounters={this.state.counters.filter(e => e.value > 0 ).length}/>
          <main className="container">
            <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
          </main>
        </React.StrictMode>
    );
  }
}

export default App;