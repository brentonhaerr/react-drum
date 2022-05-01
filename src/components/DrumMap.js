import React, { Component, useContext } from 'react';
import { AudioContext } from '../contexts/AudioContext';

const DrumMap = () => {
  const { playAudio } = useContext(AudioContext);

  return ( <div className="container-lg">
  <div className="row justify-content-center">
    <div className="col-lg-10">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2000 2000">
        <image width="2000" height="2000" xlinkHref="https://github.com/brentonhaerr/drummachine/blob/main/drumset-nums-2.jpg?raw=true"></image>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("Q") }}>Q
          <rect x="322" y="726" fill="#fff" opacity="0" width="203" height="182"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("W")}}>W
          <rect x="568" y="440" fill="#fff" opacity="0" width="240" height="238"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("E")}}>E
          <rect x="1173" y="421" fill="#fff" opacity="0" width="307" height="227"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("A") }}>A
          <rect x="739" y="766" fill="#fff" opacity="0" width="230" height="248"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("S") }}>S
          <rect x="1007" y="771" fill="#fff" opacity="0" width="218" height="226"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("D") }}>D
          <rect x="1492" y="658" fill="#fff" opacity="0" width="306" height="285"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("Z") }}>Z
          <rect x="620" y="1074" fill="#fff" opacity="0" width="315" height="264"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("X") }}>X
          <rect x="981" y="1130" fill="#fff" opacity="0" width="206" height="189"></rect>
        </a>
        <a xlinkHref="#" className="drum-pad-visual" onClick={() => { playAudio("C") }}>C
          <rect x="1232" y="957" fill="#fff" opacity="0" width="254" height="249"></rect>
        </a>
      </svg>
    </div>
  </div>
</div> );
}
 
export default DrumMap;
