import React from 'react';
import Gear from './gear.jsx';

export default class App extends React.Component {
  state = {
    size: 512,
    diameter1: 1,
    diameter2: 0.6875,
    diameter3: 0.375,
    teeth: 8,
    splay: 0.375,
    fill: 'currentColor',
  }

  render() {
    return (
      <main>
        <Gear {...this.state} />
      </main>
    );
  }
}
