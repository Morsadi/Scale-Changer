import React, { Component } from 'react';
import musicalNotes from './musicalNote';
import Chord from './Chord/chord';
import Dropdown from 'react-bootstrap/Dropdown';




class App extends Component{



  constructor(props){
    super(props)

    this.state= {

      musicalNotes : musicalNotes,
      chords : [],
      chordCount:[],
      targetChord: '',
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
   
    <input onClick={this.addChord.bind(this)} type='button' value='+' />

    <input onClick={this.getNotes.bind(this)}  type='button' value='Transform' onClick={this.getNotes.bind(this)}/>

   </div>
  )
}



}



export default App;
