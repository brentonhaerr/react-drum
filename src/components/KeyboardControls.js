import React, { useEffect, useState, useContext } from 'react';
import { AudioContext } from '../contexts/AudioContext';

const KeyboardListener = () => {
  const [keys, setKeys] = useState([]);
  const { playAudio } = useContext(AudioContext)
  
  const handleKeyDown = (event) => {
    const { key } = event;
    let audio_key = key.toUpperCase();
    playAudio(audio_key);
    

  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}

export default KeyboardListener;