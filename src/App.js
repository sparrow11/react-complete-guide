import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import Person from './Persons/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {id: 'nn01', name : 'said Erazi', age : 36},
      {id: 'nn012',name : 'Omar Erazi', age : 6},
      {id: 'nn013',name : 'Zineb Erazi', age : 1}
    ],
    otherState : 'some other things',
    showPersons : false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  changeNameHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // const person = {...this.state.persons[personIndex]};
    const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.person.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons : persons });
  }

  render() {
    const style = {
      padding : '1rem 2rem',
      backgroundColor: '#adc',
      cursor: 'pointer',
      color: 'black',
      border: '1px solid mediumseagreen',
      transition : '0.25s linear',
      ':hover' : {
        backgroundColor : '#9db',
        color: 'white'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return <Person 
                        key={p.id}
                        name={p.name} 
                        age= {p.age} 
                        click={() => this.deletePersonHandler(index)}
                        change={(event) => this.changeNameHandler(event, p.id)}/>
          })}
        </div>
      );
      style.backgroundColor =  'red';
      style.borderColor =  'red';
      style[':hover'] = {
        backgroundColor : 'salmon',
        color: 'white'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('Red');
    }
    if(this.state.persons.length<=1) {
      classes.push('bold');
    }

    return (
      <div className= 'App'>
        <h1 className= {classes.join(' ')} >Hello from React</h1>
        <button  style={style} onClick= {this.togglePersonsHandler}>Switch Name</button>

        {persons}

      </div>
    )
  }
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Radium(App);
