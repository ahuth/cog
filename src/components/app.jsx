import React from 'react';
import Controls from './controls.jsx';
import Gear from './gear.jsx';

export default class App extends React.Component {
  state = {
    size: 384,
    diameter1: 1,
    diameter2: 0.6875,
    diameter3: 0.375,
    teeth: 8,
    splay: 0.375,
    fill: 'currentColor',
  }

  handleTeethChange = (event) => {
    this.setState({ teeth: event.target.value });
  }

  render() {
    return (
      <main>
        <Gear {...this.state} />
        <Controls
          onTeethChange={this.handleTeethChange}
          teeth={this.state.teeth}
        />
      </main>
    );
  }
}
