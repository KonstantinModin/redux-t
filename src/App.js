import React from 'react';
import Persons from './containers/Persons';
import './App.css';

const App = () => 
    <div className="App">
        <p>1. Turn this app into one which does NOT use local state (in components) but instead uses Redux</p>        
        <hr />
        <Persons />
    </div>; 

export default App;
