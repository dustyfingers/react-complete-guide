import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// convert to functional component to use a hook?/hooks?
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 86 },
      { name: 'Zenu', age: 17 },
      { name: 'Alan', age: 34 },
      { name: 'Jim', age: 42 }
    ],
    otherState: 'some other value'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    // console.log('Switch name button was clicked!');
    setPersonsState({
      persons: [
        { name: 'Maxamilian', age: 86 },
        { name: 'Zenu', age: 17 },
        { name: 'Alan', age: 34 },
        { name: 'Jim', age: 25 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a react app!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler} >Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} >I am a peron with props.children! </Person>
    </div>
  );
}

export default app;


// state = {
//   persons: [
//     { name: 'Max', age: 86 },
//     { name: 'Zenu', age: 17 },
//     { name: 'Alan', age: 34 },
//     { name: 'Jim', age: 42 }
//   ]
// }

// switchNameHandler = () => {
//   // console.log('Switch name button was clicked!');
//   this.setState({
//     persons: [
//       { name: 'Maxamilian', age: 86 },
//       { name: 'Zenu', age: 17 },
//       { name: 'Alan', age: 34 },
//       { name: 'Jim', age: 25 }
//     ]
//   });
// }