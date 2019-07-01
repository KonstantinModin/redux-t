import React, { useState } from 'react';
import './AddPerson.css';

const addPerson = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    
    const nameChangedHandler = ({target: {value}}) => setName(value);
    const ageChangedHandler = ({target: {value}}) => setAge(value);
    
    
    return (
        <div className="AddPerson">
            <input type="text" placeholder="Name" value={name} onChange={nameChangedHandler}/>
            <input type="number" placeholder="Age" value={age} onChange={ageChangedHandler}/>
            <button onClick={() => props.personAdded(name, age)}>Add Person</button>
            <button onClick={() => props.personAdded(null, null)}>Add Random Person</button>
        </div>
    )
};

export default addPerson;