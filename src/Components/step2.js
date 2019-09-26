import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import musicalNotes from '../musicalNote';

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progression: 1,
      firstScale: [],
      secondScale: [],
      thirdScale: [],
      fourthScale: [],
      fifthScale: [],
      sixthScale: [],
      hovered: false,
      opacity: 1,
      slide: 'translatex(0px)',
    };
  }

  componentDidMount() {
    this.setState({
      firstScale: this.fetch(this.state.progression),
      secondScale: this.fetch(this.state.progression + 1),
      thirdScale: this.fetch(this.state.progression + 2),
      fourthScale: this.fetch(this.state.progression + 3),
      fifthScale: this.fetch(this.state.progression + 4),
      sixthScale: this.fetch(this.state.progression + 4.5),
    });
  }

  fetch(count) {
    const { chords } = this.props;
    // const chords = chords;
    const originalChords = [];
    const result = [];

    // nested looping
    for (let i = 0; i < chords.length; i += 1) {
      // loop through original chords
      const currentChord = chords[i];

      // while at i chord, loop through musical notes. When it matches the chord
      for (let j = 0; i < musicalNotes.length; j += 1) {
        const currentMusicalNote = musicalNotes[j];

        if (currentMusicalNote) {
          if (currentChord === currentMusicalNote.chord) {
            let newChordIndex = currentMusicalNote.key + count;

            if (newChordIndex > 6.5) {
              newChordIndex -= 6;
              originalChords.push(newChordIndex);
            } else {
              originalChords.push(newChordIndex);
            }

            break;
          }
        }
      } // j
    } // i

    for (const i in originalChords) {
      if (originalChords) {
        const currentNum = originalChords[i];
        for (const j in musicalNotes) {
          if (currentNum === musicalNotes[j].key) {
            result.push(musicalNotes[j].chord);
          }
        }
      }
    }
    return result;
  }

  hover() {
    const { hovered } = this.state;
    this.setState({
      hovered: !hovered,
    });
  }

  unhover() {
    const { hovered } = this.state;
    this.setState({
      hovered: !hovered,
    });
  }

  replayIt() {
    const { replay } = this.props;
    this.setState({
      opacity: 0,
      slide: 'translatex(-40px)',
    });

    setTimeout(() => {
      replay(true);
    }, 1000);
  }

  render() {
    const {
      opacity,
      slide,
      firstScale,
      secondScale,
      thirdScale,
      fourthScale,
      fifthScale,
      sixthScale,
    } = this.state;
    return (
      <div
        style={{
          opacity,
          transform: slide,
          minHeight: window.innerHeight,
        }}
        className="step2"
      >
        <h2>Here are some variations to try</h2>
        <div className="progressions">
          <div className="box">
            <h3>{firstScale[0]}</h3>
            <div>
              {firstScale.map((e, index) => (
                <div key={index}>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="box">
            <h3>{secondScale[0]}</h3>
            <div>
              {secondScale.map((e, index) => (
                <div key={index}>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="box">
            <h3>{thirdScale[0]}</h3>
            <div>
              {thirdScale.map((e, index) => (
                <div key={index}>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="box">
            <h3>{fourthScale[0]}</h3>
            <div>
              {fourthScale.map((e, index) => (
                <div key={index}>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="box">
            <h3>{fifthScale[0]}</h3>
            <div>
              {fifthScale.map((e, index) => (
                <div key={index}>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="box">
            <h3>{sixthScale[0]}</h3>
            <div>
              {sixthScale.map((e, index) => (
                <div key={index}>
                  <span>{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <span onClick={this.replayIt.bind(this)} className="replay">
          <FontAwesomeIcon icon={faRedoAlt} />
        </span>
      </div>
    );
  }
}

export default Step2;
