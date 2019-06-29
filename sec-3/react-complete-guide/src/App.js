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
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Switch name button was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 86 },
        { name: 'Zenu', age: 17 },
        { name: 'Alan', age: 34 },
        { name: 'Jim', age: 25 }
      ]
    });
  }

  nameChangedHandler = (evt) => {
    this.setState({
      persons: [
        { name: 'Max', age: 86 },
        { name: evt.target.value, age: 17 },
        { name: 'Alan', age: 34 },
        { name: 'Jim', age: 25 }
      ]
    });
  }

  render() {
    return (
      <div className="App" >
        <h1>Hi, I'm a react app!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('LOUIE!!!')} >Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'ADAM!!!')} />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age} >
          I am a peron with props.children!
          </Person>
      </div>
    );
  };
}

export default App;