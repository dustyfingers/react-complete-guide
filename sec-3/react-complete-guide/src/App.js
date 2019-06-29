import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 86 },
      { name: 'Zenu', age: 17 },
      { name: 'Alan', age: 34 },
      { name: 'Jim', age: 42 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} >I am a peron with props.children! </Person>
      </div>
    );
  }
}

export default App;
