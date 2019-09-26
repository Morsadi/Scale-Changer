import React, { Component } from 'react';
import {
  faTimes,
  faCheckCircle,
  faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga';
import Chord from './Components/chord';
import Step2 from './Components/step2';
import logo from './Assets/logo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chords: [],
      chordCount: [1, 2],
      step1Opacity: 1,
      display: true,
      slide: 'translatex(0px)',
      hovered: false,
      hoveredNext: false,
      isAbout: false,
    };
    ReactGA.initialize('UA-145382161-1');
    ReactGA.pageview('.');
  }

  getNotes() {
    // loops through all the chords and stores the checked chords in the state
    const chordsSelecter = document.getElementsByClassName('select-css');
    const { chords } = this.state;

    for (let i = 0; i < chordsSelecter.length; i += 1) {
      if (chordsSelecter) {
        const currentChord = chordsSelecter[i].value;
        const newList = chords;
        newList.push(currentChord);
        this.setState({
          chords: newList,
        });
      }
    }

    // fade out step1
    this.setState({
      step1Opacity: 0,
      slide: 'translatex(40px)',
    });

    setTimeout(() => {
      this.setState({
        display: false,
      });
    }, 1000);

    this.eventTrack();
  }

  // Google analytics event tracking
  eventTrack = () => {
    ReactGA.event({
      category: 'Get Chords',
      action: 'Received Chords',
    });
  };

  replay = val => {
    this.setState({
      display: val,
      step1Opacity: 1,
      slide: 'translatex(0px)',
      chords: [],
    });
  };

  closeAbout = () => {
    this.setState({
      isAbout: false,
    });
  };

  openAbout() {
    this.setState({
      isAbout: true,
    });
  }

  unhover() {
    const { hovered } = this.state;
    this.setState({
      hovered: !hovered,
    });
  }

  unhoverNext() {
    const { hoveredNext } = this.state;
    this.setState({
      hoveredNext: !hoveredNext,
    });
  }

  hoverNext() {
    const { hoveredNext } = this.state;
    this.setState({
      hoveredNext: !hoveredNext,
    });
  }

  // hover the about svg
  hover() {
    const { hovered } = this.state;
    this.setState({
      hovered: !hovered,
    });
  }

  // add a chord dropdown
  addChord() {
    const { chordCount } = this.state;
    const previousChords = chordCount;
    const count = previousChords.length + 1;

    if (chordCount.length < 10) {
      previousChords.push([count, '']);
    }
    this.setState({
      chordCount: previousChords,
    });
  }

  removeChord() {
    const { chordCount } = this.state;
    const previousChords = chordCount;

    previousChords.pop();
    this.setState({
      chordCount: previousChords,
    });
  }

  render() {
    const {
      isAbout,
      display,
      step1Opacity,
      slide,
      chordCount,
      chords,
    } = this.state;

    return (
      <div className="App">
        {/* this for the about section */}
        {isAbout ? (
          <div className="closeTab">
            <span onClick={this.closeAbout} className="close">
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <div>
              <h3>
                This app generates different key transpositions of your
                favourite song.
                <br />
                All you have to do is grab your intsrument, submit the original
                progression of your song, then you
                {"'"}
                ll receive different transpositions to find the one that matches
                your voice.
              </h3>
              <p>
                <strong>Note:</strong>
                This app does not account for chord qualities like, minor, major
                and intervals...
                <br />
                If your chords have any quality like 7, 5, 9, aug or maj...,
                specify only the root chords and then add the qualities to the
                new chords respectively.
              </p>
            </div>
          </div>
        ) : null}

        <span className="logo">{logo[0]}</span>
        <span onClick={this.openAbout.bind(this)} className="about">
          <FontAwesomeIcon icon={faInfo} />
        </span>

        {display ? (
          <div
            style={{
              display,
              opacity: step1Opacity,
              transform: slide,
              minHeight: window.innerHeight - 50,
            }}
            className="step1"
          >
            <h2>
              Select the main chords
              <br />
              that you want to transpose
            </h2>

            <div className="chordBox">
              {chordCount.map((e, index) => (
                <span key={index}>
                  <Chord />
                </span>
              ))}
            </div>
            <input
              className="addBtn"
              onClick={this.addChord.bind(this)}
              type="button"
              value="+"
            />
            <input
              className="removeBtn"
              onClick={this.removeChord.bind(this)}
              type="button"
              value="-"
            />

            <br />
            <span onClick={this.getNotes.bind(this)} className="next">
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
          </div>
        ) : (
          <Step2 replay={this.replay} chords={chords} />
        )}
      </div>
    );
  }
}

export default App;
