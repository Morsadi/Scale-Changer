import React, { Component } from 'react';
import musicalNotes from '../musicalNote'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt} from '@fortawesome/free-solid-svg-icons';
class Step2 extends Component{



  constructor(props){
    super(props)

    this.state= {

      musicalNotes : musicalNotes,
      chords : this.props.chords,
    progression: 1,
    firstScale:[],
    secondScale:[],
    thirdScale:[],
    fourthScale:[],
    fifthScale:[],
    sixthScale:[],
    hovered: false,
    opacity: 1,
    slide: 'translatex(0px)',
    keys: [],
    scales: []

      }


  }

  componentDidMount(){
    
    this.setState({
    
        firstScale : this.fetch(this.state.progression),
        secondScale : this.fetch(this.state.progression + 1),
        thirdScale : this.fetch(this.state.progression + 2),
        fourthScale : this.fetch(this.state.progression +3),
        fifthScale:this.fetch(this.state.progression +4),
    sixthScale:this.fetch(this.state.progression +4.50),
  

    })

       
    
      }//DidMount
    

 fetch(count){
    let chords = this.state.chords;
    let musicalNotes = this.state.musicalNotes;
    let originalChords = [];
    let result =[]
  

   
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
return(result)
}

hover(){
    this.setState({
        hovered: !this.state.hovered
    })
}

unhover(){
    this.setState({
        hovered: !this.state.hovered
    })
}

replayIt(){
    


    this.setState({
        keys: [],
        opacity: 0,
        slide: 'translatex(-40px)'
    })

    setTimeout(()=>{
        this.props.replay(true)
    }, 1000)
    
}

  render(){


return (
  <div style={{opacity: this.state.opacity, transform: this.state.slide, minHeight: window.innerHeight}} className='step2'>


<h2>Here are some
variations to try</h2>
        <div className='progressions'>
        
        <div className='box' >
        
            <h3>{this.state.firstScale[0]}</h3>
            <div>
               {
                   this.state.firstScale.map(function(e, index) {return <div key={index}><span>{e}</span></div>})
               }
            </div>
        </div>
        <div className='box' >
            <h3>{this.state.secondScale[0]}</h3>
            <div>
            {
                   this.state.secondScale.map(function(e, index) {return <div key={index}><span>{e}</span></div>})
               }
            </div>
        </div>
        <div className='box' >
            <h3>{this.state.thirdScale[0]}</h3>
            <div>
            {
                   this.state.thirdScale.map(function(e, index) {return <div key={index}><span>{e}</span></div>})
               }
            </div>
        </div>
        <div className='box' >
            <h3>{this.state.fourthScale[0]}</h3>
            <div>
            {
                   this.state.fourthScale.map(function(e, index) {return <div key={index}><span>{e}</span></div>})
               }
            </div>
        </div>
        <div className='box' >
            <h3>{this.state.fifthScale[0]}</h3>
            <div>
            {
                   this.state.fifthScale.map(function(e, index) {return <div key={index}><span>{e}</span></div>})
               }
            </div>
        </div>
        <div className='box' >
            <h3>{this.state.sixthScale[0]}</h3>
            <div>
            {
                   this.state.sixthScale.map(function(e, index) {return <div key={index}><span>{e}</span></div>})
               }
            </div>
        </div>
        
        
        
        
        </div>
        <br/>
<span onClick={this.replayIt.bind(this)} className='replay'><FontAwesomeIcon icon={faRedoAlt} /></span>


  </div>
        )
    }
}
    
    
    
    export default Step2;
      