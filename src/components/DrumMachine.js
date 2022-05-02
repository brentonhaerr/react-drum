import React, { Component } from 'react';
import AudioContextProvider from '../contexts/AudioContext';
import Display from './Display';
import DrumKeyboard from './DrumKeyboard';
import DrumMap from './DrumMap';
import KeyboardListener from './KeyboardControls';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
  }

  state = {}
  render() {
    return (
      <div id="drum-machine">
        <AudioContextProvider>
          <Display />
          <KeyboardListener />
          <DrumMap playAudio={this.playAudio} />
          <DrumKeyboard playAudio={this.playAudio} />
        </AudioContextProvider>
      </div>
    );
  }
}

export default DrumMachine;