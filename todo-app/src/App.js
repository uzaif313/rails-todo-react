import React, { Component } from 'react';
import logo from './logo.svg';
import TodosContainer from './components/TodosContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "container">
        <div className = "header">
          <h1> Todo List </h1>
        </div>
        <TodosContainer />
      </div>
    );
  }
}

export default App;
