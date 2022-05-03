import React, { Component, createContext } from 'react';

// Audio Clips
import tom1 from '../assets/tom-high-1.mp3';
import tom2 from '../assets/tom-high-2.mp3';
import tom3 from '../assets/Perc-Kung-Fu.mp3';
import hat1 from '../assets/Hats1.mp3';
import hat2 from '../assets/Hats2.mp3';
import hat3 from '../assets/Hats3.mp3';
import hat4 from '../assets/Hats4.mp3';
import kickfx from '../assets/Kick-Coffee-Shop.mp3';
import snarefx from '../assets/Snare-Datasette.mp3';

export const AudioContext = createContext();

class AudioContextProvider extends Component {
  state = {
    sounds: [
      {
        key: "Q",
        source: hat1,
        id: "hihat",
        name: "Hi-hat"
      },
      {
        key: "W",
        source: hat2,
        id: "cymbal1",
        name: "Cymbal 1"
      },
      {
        key: "E",
        source: hat3,
        id: "cymbal2",
        name: "Cymbal 2"
      },
      {
        key: "D",
        source: hat4,
        id: "cymbal3",
        name: "Cymbal 3"
      },
      {
        key: "Z",
        source: snarefx,
        id: "snare",
        name: "Snare"
      },
      {
        key: "X",
        source: kickfx,
        id: "bass",
        name: "Bass"
      },
      {
        key: "A",
        source: tom1,
        id: "tom1",
        name: "Tom 1"
      },
      {
        key: "S",
        source: tom2,
        id: "tom2",
        name: "Tom 2"
      },
      {
        key: "C",
        source: tom3,
        id: "tom3",
        name: "Tom 3"
      }
    ]
  }

  playAudio = (audio_element_key) => {
    let audio_element = this.state.sounds.filter((elem) => { return elem.key == audio_element_key })[0];
    console.log("Play audio: " + audio_element.name)
    document.getElementById(audio_element.key).load();
    document.getElementById(audio_element.key).play();
    document.getElementById("display").innerHTML = audio_element.name;
  }

  generateButtons = () => {
    return (
      this.state.sounds.map(sound => {
        return (
          <button key={sound.key+"-key"} id={sound.key+"-button"} className="drum-pad btn btn-secondary mx-1" onClick={() => { this.playAudio(sound.key) }}>
            {sound.key}
            <audio id={sound.key} className="clip" src={sound.source}></audio>
          </button>
        )
      }))
  }

  render() {
    return (
      <AudioContext.Provider value={{ ...this.state, playAudio: this.playAudio, generateButtons: this.generateButtons }}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioContextProvider;