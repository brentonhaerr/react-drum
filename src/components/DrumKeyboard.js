import React, { Component, useContext } from 'react';
import { AudioContext } from '../contexts/AudioContext';

const DrumKeyboard = () => {

  const { sounds, playAudio } = useContext(AudioContext);

  return (
    <div className="container-lg">
      <div className="row justify-content-center">
        <div className="col-10">
          <button id="Q" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("Q") }}>
            Q
          </button>
          <button id="W" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("W") }}>
            W
          </button>
          <button id="E" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("E") }}>
            E
          </button>
          <button id="A" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("A") }}>
            A
          </button>
          <button id="S" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("S") }}>
            S
          </button>
          <button id="D" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("D") }}>
            D
          </button>
          <button id="Z" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("Z") }}>
            Z
          </button>
          <button id="X" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("X") }}>
            X
          </button>
          <button id="C" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio("C")}}>
            C
          </button>
        </div>
      </div>
    </div>);
}

export default DrumKeyboard;