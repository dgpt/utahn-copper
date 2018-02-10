import React, { Component } from 'react';
import './Controls.css';

export default class Controls extends Component {
  render() {
    const { isVoting } = this.props;

    return (
      <div className="controls">
        {isVoting && this.renderVoting()}
      </div>
    );
  }

  renderVoting() {
    return (
      <div className="voting">
        <button className="retreat">
          Retreat
        </button>
        <button className="continue">
          Continue
        </button>
      </div>
    );
  }
}
