import React, { Component } from 'react';
import musicalNotes from './musicalNote';
import Chord from './Components/chord';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Step2 from './Components/step2';
import logo from './Assets/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheckCircle, faInfo} from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';


class App extends Component{



  constructor(props){
    super(props)
    
    this.state= {
    
    musicalNotes : musicalNotes,
      chords : [],
      chordCount:[1, 2],
      step1Opacity: 1,
      display: true,
      slide: 'translatex(0px)',
      hovered: false,
      hoveredNext: false,
      isAbout: false

      }
  }

  componentWillMount(){
    ReactGA.initialize('UA-145382161-1');
    ReactGA.pageview('.');
  }


getNotes(){

//loops through all the chords and stores the checked chords in the state
let chords = document.getElementsByClassName('select-css');
for (let i = 0; i < chords.length; i++){
  if (chords){
    let currentChord = chords[i].value;
    let newList = this.state.chords;
    newList.push(currentChord)
    this.setState({
      chords: newList
    })
  } 
}

//fade out step1
this.setState({
  step1Opacity:0,
  slide: 'translatex(40px)'
})

setTimeout(
  function showStep2 (){

  this.setState({
    display: false,
    step2Opacity: 1,

  })
  }.bind(this), 1000
  
  )

  ReactGA.event({
    category: "Fetch Chords",
    action: "User clicked on Next",
  })
}
//add a chord dropdown
addChord(){
 let previousChords = this.state.chordCount;
 let count = previousChords.length +1
 
 if (this.state.chordCount.length <10){
  previousChords.push([count, ''])
 }
 this.setState({
  chordCount: previousChords
})

}
removeChord(){
  let previousChords = this.state.chordCount;

 previousChords.pop()
 this.setState({
   chordCount: previousChords
 })
}

//hover the about svg
hover(){
  this.setState({
    hovered: !this.state.hovered
  })
}
hoverNext(){
  this.setState({
    hoveredNext: !this.state.hoveredNext
  })
}
unhoverNext(){
  this.setState({
    hoveredNext: !this.state.hoveredNext
  })
}
unhover(){
  this.setState({
    hovered: !this.state.hovered
  })
}
replay(val){

  
  this.setState({
    display: val,
    step1Opacity: 1,
    slide: 'translatex(0px)',
    chords: [],
  })
}

openAbout(){
  this.setState({
    isAbout: true
  })
}
closeAbout(){
  this.setState({
    isAbout: false
  })
}

render(){

  return (


    <div className="App">
  {/* this for the about section */}
  {this.state.isAbout?
  <div className='closeTab'>
  <span onClick={this.closeAbout.bind(this)} className='close'><FontAwesomeIcon icon={faTimes} /></span>  
  <div>
<h3>This app generates different keys of your favourite song. <br/>All you have to do is grab your intrument, submit the original progression of your song, then you'll receive different variations to find the one that matches your voice. </h3>
<p> <strong>Note:</strong> This app does not account for chord qualities like, minor, major and intervals... <br />If your chords have any quality like 7, 5, 9, aug or maj..., specify only the root chords and then add the qualities to the new chords respectively.</p>
</div></div>:null
}
          

  <span className='logo'>{logo[0]}</span>
  <span onClick={this.openAbout.bind(this)} className='about'><FontAwesomeIcon icon={faInfo} /></span>

    {this.state.display?
    <div style={{ display: this.state.display ,opacity: this.state.step1Opacity, transform: this.state.slide, minHeight: (window.innerHeight - 50)}} className='step1'>

    <h2>Select the main chords<br />that you want to change<br />
the scale of.</h2>

      <div className='chordBox'>
      <ReactCSSTransitionGroup
      component={React.Fragment} //prevents from grouping the new chords in a span
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> 
    {
      this.state.chordCount.map((e, index)=>
      <span key={index}><Chord /></span>
      )
    }
    </ReactCSSTransitionGroup>
   </div>
    <input className='addBtn' onClick={this.addChord.bind(this)} type='button' value='+' />
    <input className='removeBtn' onClick={this.removeChord.bind(this)} type='button' value='-' />

    
    <br/><span onClick={this.getNotes.bind(this)} className='next'><FontAwesomeIcon icon={faCheckCircle} /></span>
    </div>
    : <Step2 replay={this.replay.bind(this)} chords={this.state.chords} />
    }






   </div>
  )
}



}



export default App;
