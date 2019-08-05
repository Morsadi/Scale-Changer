import React, { Component } from 'react';
import musicalNotes from '../musicalNote'

class Chord extends Component{



  constructor(props){
    super(props)

    this.state= {

      musicalNotes : musicalNotes,
      chord : '',
      targetChord: '',
      selectValue: ''
      }


  }

 
eventHandler(e){
    this.setState({selectValue:e.target.value});
  }
  getNotes(){
//     const allNotes = this.state.musicalNotes;
   
//   const firstChord = this.state.chord1;
//   const target = this.state.targetChord;
//   let key1;
//   let key2;
//   let targetChord;
//   let count;
  
  
//   //first chord
//   for(let i in allNotes){
//   if (firstChord === allNotes[i].chord){
//     const key = allNotes[i].key
//     key1= key;
  
//     break;
//   } 
//   }
 
//   //target chord
//   for(let i = 0; i <= allNotes.length; i++){
//     if(target === allNotes[i].chord){
//       const key = allNotes[i].key
//     targetChord= key;
    
    
  
//       break;
//     }
//   }
  
  
//   //finding the count between the chords
//     count= targetChord - key1
//   let newChord = key2 + count; 
//   //find chords
//     for(let i in allNotes){
//       if(newChord === allNotes[i].key){
//         const chord = allNotes[i].chord
//         newChord= chord;
//         break;
//       }
//     }
  
  }





  render(){
    return (
  <div>


<select value={this.state.selectValue} onChange={this.eventHandler.bind(this)} className="select-css">
	<option className="chords" id="1">C</option>
	<option className="chords" id="2">D</option>
	<option className="chords" id="3">E</option>
	<option className="chords" id="4">F</option>
	<option className="chords" id="5">G</option>
  <option className="chords" id="6">A</option>
  <option className="chords" id="7">B</option>
</select>


  </div>
        )
    }
}
    
    
    
    export default Chord;
      