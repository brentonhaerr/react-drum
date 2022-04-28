import React, { Component } from 'react';

class DrumKeyboard extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-10">
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("Q") }}>Q</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("W") }}>W</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("E") }}>E</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("A") }}>A</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("S") }}>S</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("D") }}>D</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("Z") }}>Z</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("X") }}>X</button>
            <button className="btn btn-secondary mx-1" onClick={() => { this.props.playAudio("") }}>C</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DrumKeyboard;