import React, { Component } from 'react';
import musicalNotes from '../musicalNote'

class Step2 extends Component{



  constructor(props){
    super(props)

    this.state= {

      musicalNotes : musicalNotes,
      chords : this.props.chords,
    progression: 2,
        keys: []
      }


  }

 
componentDidMount(){
    let chords = this.state.chords;
    let musicalNotes = this.state.musicalNotes;
    let originalChords = [];
    let result =[]
  

    function fetch(count){


   
    //nested looping
  for(let i = 0; i < chords.length; i++){
      //loop through original chords
    let currentChord = chords[i];

    //while at i chord, loop through musical notes. When it matches the chord
    for (let j = 0; i < musicalNotes.length;j++){
        let currentMusicalNote = musicalNotes[j]

        if (currentMusicalNote){

            if (currentChord === currentMusicalNote.chord){
                let newChordIndex = currentMusicalNote.key +count;

                    if (newChordIndex > 6.50 ){
                        newChordIndex -= 6;
                        originalChords.push(newChordIndex )
                    }else {
                        originalChords.push(newChordIndex )
                    }
                 

         break;
                 }

        }

    }//j

  } //i
//   console.log(originalChords)


for (let i in originalChords){
   
    if (originalChords){
        let currentNum = originalChords[i];
        for (let j in musicalNotes){
            if (currentNum === musicalNotes[j].key){
                result.push(musicalNotes[j].chord)
            }
        }
    }
}
 
   

  console.log(result)

}

fetch(2)


  }//DidMount

 

  render(){
   
    return (
  <div>

<h1>{this.state.keys}
</h1>
  </div>
        )
    }
}
    
    
    
    export default Step2;
      