import React, { Component, createContext } from 'react';

// Audio Clips
import tomhigh1fx from '../assets/tom-high-1.mp3';
import tomhigh2fx from '../assets/tom-high-2.mp3';
import cymballight1fx from '../assets/cymbal-light-1.mp3';
import cymballight2fx from '../assets/cymbal-light-2.mp3';
import kickfx from '../assets/kick.mp3';
import snarefx from '../assets/snare.mp3';
import tommid1fx from '../assets/tom-mid-low-1.mp3';
import tommid2fx from '../assets/tom-mid-low-2.mp3';

export const AudioContext = createContext();

class AudioContextProvider extends Component {
  state = {
    sounds: {
      hihat: {
        key: "Q",
        source: {cymballight1fx},
        id: "hihat",
        name: "Hi-hat"
      },
      cymbal1: {
        key: "W",
        source: {cymballight2fx},
        id: "cymbal1",
        name: "Cymbal 1"
      },
      cymbal2: {
        key: "E",
        source: {tomhigh1fx},
        id: "cymbal2",
        name: "Cymbal 2"
      },
      cymbal3: {
        key: "D",
        source: {tomhigh2fx},
        id: "cymbal3",
        name: "Cymbal 3"
      },
      snare: {
        key: "Z",
        source: {snarefx},
        id: "snare",
        name: "Snare"
      },
      bass: {
        key: "X",
        source: {kickfx},
        id: "bass",
        name: "Bass"
      },
      tom1: {
        key: "A",
        source: {tommid1fx},
        id: "tom1",
        name: "Tom 1"
      },
      tom2: {
        key: "S",
        source: {tommid2fx},
        id: "tom2",
        name: "Tom 2"
      },
      tom3: {
        key: "C",
        source: {tommid1fx},
        id: "tom3",
        name: "Tom 3"
      }
    }
  }

  playAudio = (audio_element) => {
    console.log("Play audio: "+audio_element.name)
    document.getElementById(audio_element.id).load();
    document.getElementById(audio_element.id).play();
  }

  render() {
    return (
      <AudioContext.Provider value={{...this.state, playAudio: this.playAudio}}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioContextProvider;