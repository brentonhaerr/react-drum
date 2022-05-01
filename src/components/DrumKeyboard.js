import React, { Component, useContext } from 'react';
import { AudioContext } from '../contexts/AudioContext';

const DrumKeyboard = () => {

  const { sounds, playAudio } = useContext(AudioContext);

  return (
    <div className="container-lg">
      <div className="row justify-content-center">
        <div className="col-10">
          <button id="Q" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.hihat) }}>
            Q
          </button>
          <button id="W" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.cymbal1) }}>
            W
          </button>
          <button id="E" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.cymbal2) }}>
            E
          </button>
          <button id="A" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.tom1) }}>
            A
          </button>
          <button id="S" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.tom2) }}>
            S
          </button>
          <button id="D" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.cymbal3) }}>
            D
          </button>
          <button id="Z" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.snare) }}>
            Z
          </button>
          <button id="X" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.bass) }}>
            X
          </button>
          <button id="C" className="drum-pad btn btn-secondary mx-1" onClick={() => { playAudio(sounds.tom3)}}>
            C
          </button>
        </div>
      </div>
    </div>);
}

export default DrumKeyboard;