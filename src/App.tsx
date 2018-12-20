import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welkom" />
      </div>
    );
  }
}

export default App;
