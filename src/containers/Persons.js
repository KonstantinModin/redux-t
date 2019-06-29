import React from 'react';
import { connect } from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import './Persons.css';

const Persons = ({persons, add, del}) => 
    <div className="Persons">
        <AddPerson personAdded={add} />
        <div className="Container">
            {persons.map(({id, name, age}) => (
                <Person key={id} name={name} age={age} clicked={() => del(id)}/>))
            }
        </div>
    </div>;


const mapStateToProps = ({persons}) => {
    return {
        persons: persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({type: 'ADD'}),
        del: (id) => dispatch({type: 'DEL', payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);