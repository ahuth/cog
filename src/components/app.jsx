/* eslint-disable react/jsx-no-bind */
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

  handleParameterChange(name, event) {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <main>
        <Gear {...this.state} />
        <Controls
          diameter2={this.state.diameter2}
          diameter3={this.state.diameter3}
          onDiameter2Change={this.handleParameterChange.bind(this, 'diameter2')}
          onDiameter3Change={this.handleParameterChange.bind(this, 'diameter3')}
          onSplayChange={this.handleParameterChange.bind(this, 'splay')}
          onTeethChange={this.handleParameterChange.bind(this, 'teeth')}
          splay={this.state.splay}
          teeth={this.state.teeth}
        />
      </main>
    );
  }
}
