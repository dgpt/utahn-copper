import React, { Component } from 'react';
import './App.css';
import Board from './Board';
import Controls from './Controls';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVoting: true
    };
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Utahn Copper</h1>
        </header>
        <main>
          <Board />
          <Controls
            isVoting={this.state.isVoting}
          />
        </main>
      </div>
    );
  }
}
