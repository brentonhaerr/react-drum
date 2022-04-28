import React, { Component } from 'react';
import tomhigh1fx from '../assets/tom-high-1.mp3';
import tomhigh2fx from '../assets/tom-high-2.mp3';
import cymballight1fx from '../assets/cymbal-light-1.mp3';
import cymballight2fx from '../assets/cymbal-light-2.mp3';
import kickfx from '../assets/kick.mp3';
import snarefx from '../assets/snare.mp3';
import tommid1fx from '../assets/tom-mid-low-1.mp3';
import tommid2fx from '../assets/tom-mid-low-2.mp3';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
  }

  state = {}

  render() {
    return (
      <div>
        <audio src={tomhigh1fx} id="tom_high_1"></audio>
        <audio src={tomhigh2fx} id="tom_high_2"></audio>
        <audio src={cymballight1fx} id="cymbal_1"></audio>
        <audio src={cymballight2fx} id="cymbal_2"></audio>
        <audio src={kickfx} id="kick"></audio>
        <audio src={snarefx} id="snare"></audio>
        <audio src={tommid1fx} id="tom_mid_1"></audio>
        <audio src={tommid2fx} id="tom_mid_2"></audio>
      </div>
    );
  }
}

export default AudioPlayer;