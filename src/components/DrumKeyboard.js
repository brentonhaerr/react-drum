import React, { Component, useContext } from 'react';
import { AudioContext } from '../contexts/AudioContext';

const DrumKeyboard = () => {

  const { sounds, playAudio, generateButtons } = useContext(AudioContext);

  return (
    <div className="container-lg">
      <div className="row justify-content-center">
        <div className="col-10">
          {
           generateButtons()
          }
        </div>
      </div>
    </div>);
}

export default DrumKeyboard;