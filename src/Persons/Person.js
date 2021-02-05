import React from 'react';
import Radium from 'radium';

import './Person.css'

const Person = (props) => {
    return (
        <div className= 'Person'>
            <p onClick={props.click}>iam {props.name}, age: {props.age} years</p>
            <p>{props.children}</p>
            <input type="text"  onChange={props.change}/>
        </div>
    )
};

export default Radium(Person);