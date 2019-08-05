import React, { Component } from 'react';
import musicalNotes from './musicalNote';
import Chord from './Chord/chord';

class App extends Component{



  constructor(props){
    super(props)

    this.state= {

      musicalNotes : musicalNotes,
      chord1 : '',
      targetChord: '',
      }


  }

eventHandler(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

getNotes(){









}



render(){
  return (





    <div className="App">

    
   <Chord />


    <input type='button' value='Transform' onClick={this.getNotes.bind(this)}/>

   </div>
  )
}



}



export default App;
