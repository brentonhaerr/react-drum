import React, { Component, useContext } from 'react';
import { AudioContext } from '../contexts/AudioContext';

const DrumKeyboard = () => {

  const { sounds, playAudio } = useContext(AudioContext);

  return (
    <div className="container-lg">
      <div className="row justify-content-center">
        <div className="col-10">
          <button id="Q" className="drum-pad btn btn-secondary mx-1" onClick={() => { console.log("Playing " + sounds.hihat.name); playAudio(sounds.hihat) }}>
            Q
          </button>
          <button id="W" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("W") }}>
            W
          </button>
          <button id="E" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("E") }}>
            E
          </button>
          <button id="A" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("A") }}>
            A
          </button>
          <button id="S" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("S") }}>
            S
          </button>
          <button id="D" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("D") }}>
            D
          </button>
          <button id="Z" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("Z") }}>
            Z
          </button>
          <button id="X" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("X") }}>
            X
          </button>
          <button id="C" className="drum-pad btn btn-secondary mx-1" onClick={() => { this.props.playAudio("") }}>
            C
          </button>
        </div>
      </div>
    </div>);
}

export default DrumKeyboard;