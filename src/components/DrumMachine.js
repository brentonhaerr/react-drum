import React, { Component } from 'react';
import AudioPlayer from './AudioPlayer';
import DrumKeyboard from './DrumKeyboard';
import DrumMap from './DrumMap';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.playAudio = this.playAudio.bind(this);
  }

  getAudioElement = (key_pad) => {
    switch (key_pad) {
      case "Q":
        return "tom_high_1";
      case "W":
        return "tom_high_2";
      case "E":
        return "cymbal_1";
      case "A":
        return "cymbal_2";
      case "S":
        return "kick";
      case "D":
        return "snare";
      case "Z":
        return "tom_mid_1";
      case "X":
        return "tom_mid_2";
      case "C":
        return "";
      default:
        console.log("Invalid key played");
        return "tom_high_1";
    }
  }

  playAudio = (key_pad) => {
    let audio_element_id = this.getAudioElement(key_pad);
    document.getElementById(audio_element_id).load();
    document.getElementById(audio_element_id).play();
  }

  state = {}
  render() {
    return (
      <div>
        <AudioPlayer playAudio={this.playAudio} />
        <DrumMap playAudio={this.playAudio} />
        <DrumKeyboard playAudio={this.playAudio} />
      </div>
    );
  }
}

export default DrumMachine;