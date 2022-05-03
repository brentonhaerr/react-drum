import React from 'react';
import AudioContextProvider from '../contexts/AudioContext';
import Display from './Display';
import DrumKeyboard from './DrumKeyboard';
import DrumMap from './DrumMap';
import KeyboardListener from './KeyboardControls';

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <AudioContextProvider>
        <KeyboardListener />
        <DrumMap />
        <Display />
        <DrumKeyboard />
      </AudioContextProvider>
    </div>
  );
}

export default DrumMachine;