import React, { Component } from 'react';
import musicalNotes from '../musicalNote'

class Chord extends Component{

  render(){
    return (
  <div>

<select className="select-css">
        <option>C</option>
        <option>C #</option>
        <option>D</option>
        <option>D #</option>
        <option>E</option>
        <option>F</option>
        <option>F #</option>
        <option>G</option>
        <option>G #</option>
        <option>A</option>
        <option>A #</option>
        <option>B</option>

      </select>
  </div>
        )
    }
}
    
    
    
    export default Chord;
      