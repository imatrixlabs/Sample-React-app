import React, { Component } from 'react';
import RoomForm from './rooms';
import RoomList from './roomlist';
// import logo from './logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RoomForm />
          <RoomList />
        </header>
      </div>
    );
  }
}

export default App;
