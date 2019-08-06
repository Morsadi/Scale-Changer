import React, { Component } from 'react';
import musicalNotes from './musicalNote';
import Step2 from './Components/step2';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class App extends Component{



  constructor(props){
    super(props)
    
    this.state= {
    
    musicalNotes : musicalNotes,
      chords : [],
      chordCount:[],
      targetChord: '',
      displayStep1: 1,
      displayStep2: 'none',
      pull: 'translatex(0px)'
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

this.setState({
  displayStep1:0,
  pull: 'translatex(40px)'
})
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

render(){
  return (


    <div className="App">

 <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
    <div style={{opacity: this.state.displayStep1, transform: this.state.pull}} className='step1'>

    <h2>Select the main chords<br />that you want to change<br />
the scale of.</h2>
      <div className='chordBox'>
    <select className="select-css">
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
        <option>G</option>
        <option>A</option>
        <option>B</option>
      </select>
      <select className="select-css">
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
        <option>G</option>
        <option>A</option>
        <option>B</option>
      </select>

      <ReactCSSTransitionGroup
      component={React.Fragment} //prevents from grouping the new chords in a span
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> 
    {
      this.state.chordCount.map((e, index)=>
      <select key={index} className="select-css">
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
        <option>G</option>
        <option>A</option>
        <option>B</option>
      </select>
      )
    }
    </ReactCSSTransitionGroup>
   </div>
    <input className='addBtn' onClick={this.addChord.bind(this)} type='button' value='+' />

    <input className='nextBtn' onClick={this.getNotes.bind(this)}  type='button' value='NEXT' onClick={this.getNotes.bind(this)}/>
    </div>
    
    </ReactCSSTransitionGroup>


   </div>
  )
}



}



export default App;
