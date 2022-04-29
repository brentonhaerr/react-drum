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
    hihat: {
      key: "Q",
      url: "",
      id: "",
      name: "Hi-hat"
    },
    cymbal1: {
      key: "W",
      url: "",
      id: "",
      name: "Cymbal 1"
    },
    cymbal2: {
      key: "E",
      url: "",
      id: "",
      name: "Cymbal 2"
    },
    cymbal3: {
      key: "D",
      url: "",
      id: "",
      name: "Cymbal 3"
    },
    snare: {
      key: "Z",
      url: "",
      id: "",
      name: "Snare"
    },
    bass: {
      key: "X",
      url: "",
      id: "",
      name: "Bass"
    },
    tom1: {
      key: "A",
      url: "",
      id: "",
      name: "Tom 1"
    },
    tom2: {
      key: "S",
      url: "",
      id: "",
      name: "Tom 2"
    },
    tom3: {
      key: "C",
      url: "",
      id: "",
      name: "Tom 3"
    }
   }

  render() { 
    return (
      <AudioContext.Provider value={this.state}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}
 
export default AudioContextProvider;