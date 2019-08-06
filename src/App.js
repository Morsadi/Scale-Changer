import React, { Component } from 'react';
import musicalNotes from './musicalNote';
import Chord from './Components/chord';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Step2 from './Components/step2'


class App extends Component{



  constructor(props){
    super(props)
    
    this.state= {
    
    musicalNotes : musicalNotes,
      chords : [],
      chordCount:[1, 2,3],
      targetChord: '',
      step1Opacity: 1,
      step2Opacity: 0,
      display1: true,
      display2: 'none',
      slide1: 'translatex(0px)',
      slide2: 'translatex(-40px)'

      }
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
  slide1: 'translatex(40px)'
})

setTimeout(
  function showStep2 (){
  console.log('step 2 is here')
  this.setState({
    display1: false,

  })
  }.bind(this), 1000
  
  )
}
//add a chord dropdown
addChord(){
 let previousChords = this.state.chordCount;
 let count = previousChords.length +1
 previousChords.push([count, ''])
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
render(){
  return (


    <div className="App">

 
    {this.state.display1?
    <div style={{ display: this.state.display1 ,opacity: this.state.step1Opacity, transform: this.state.slide1}} className='step1'>

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
    <input className='addBtn' onClick={this.removeChord.bind(this)} type='button' value='-' />

    <input className='nextBtn' onClick={this.getNotes.bind(this)}  type='button' value='GENERATE'/>
    </div>
    : <Step2 chords={this.state.chords} />
    }






   </div>
  )
}



}



export default App;
