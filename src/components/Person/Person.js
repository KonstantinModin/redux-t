import React from 'react';
import './Person.css';

const person = ({clicked, name, age}) => (
    <div className="Person" onClick={clicked}>
        <h1>{name}</h1>
        <p>Age: {age}</p>
    </div>
);

export default person;