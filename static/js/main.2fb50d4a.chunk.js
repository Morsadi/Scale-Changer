(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(12),i=a.n(s),r=(a(23),a(2)),o=a(3),c=a(5),h=a(4),u=a(6),d=[{key:1,chord:"C"},{key:1.5,chord:"C#"},{key:2,chord:"D"},{key:2.5,chord:"D#"},{key:3,chord:"E"},{key:3.5,chord:"F"},{key:4,chord:"F#"},{key:4.5,chord:"G"},{key:5,chord:"G#"},{key:5.5,chord:"A"},{key:6,chord:"A#"},{key:6.5,chord:"B"}],m=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("select",{className:"select-css"},l.a.createElement("option",null,"C"),l.a.createElement("option",null,"C#"),l.a.createElement("option",null,"D"),l.a.createElement("option",null,"D#"),l.a.createElement("option",null,"E"),l.a.createElement("option",null,"F"),l.a.createElement("option",null,"F#"),l.a.createElement("option",null,"G"),l.a.createElement("option",null,"G#"),l.a.createElement("option",null,"A"),l.a.createElement("option",null,"A#"),l.a.createElement("option",null,"B")))}}]),t}(n.Component),p=a(17),v=a.n(p),y=a(7),E=a(8),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={musicalNotes:d,chords:a.props.chords,progression:1,firstScale:[],secondScale:[],thirdScale:[],fourthScale:[],fifthScale:[],sixthScale:[],hovered:!1,opacity:1,slide:"translatex(0px)",keys:[],scales:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({firstScale:this.fetch(this.state.progression),secondScale:this.fetch(this.state.progression+1),thirdScale:this.fetch(this.state.progression+2),fourthScale:this.fetch(this.state.progression+3),fifthScale:this.fetch(this.state.progression+4),sixthScale:this.fetch(this.state.progression+4.5)})}},{key:"fetch",value:function(e){for(var t=this.state.chords,a=this.state.musicalNotes,n=[],l=[],s=0;s<t.length;s++)for(var i=t[s],r=0;s<a.length;r++){var o=a[r];if(o&&i===o.chord){var c=o.key+e;c>6.5?(c-=6,n.push(c)):n.push(c);break}}for(var h in n)if(n){var u=n[h];for(var d in a)u===a[d].key&&l.push(a[d].chord)}return l}},{key:"hover",value:function(){this.setState({hovered:!this.state.hovered})}},{key:"unhover",value:function(){this.setState({hovered:!this.state.hovered})}},{key:"replayIt",value:function(){var e=this;this.setState({keys:[],opacity:0,slide:"translatex(-40px)"}),setTimeout(function(){e.props.replay(!0)},1e3)}},{key:"render",value:function(){return l.a.createElement("div",{style:{opacity:this.state.opacity,transform:this.state.slide,minHeight:window.innerHeight},className:"step2"},l.a.createElement("h2",null,"Here are some scales to try"),l.a.createElement("div",{className:"progressions"},l.a.createElement("div",{className:"box"},l.a.createElement("h3",null,this.state.firstScale[0]),l.a.createElement("div",null,this.state.firstScale.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null,e))}))),l.a.createElement("div",{className:"box"},l.a.createElement("h3",null,this.state.secondScale[0]),l.a.createElement("div",null,this.state.secondScale.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null,e))}))),l.a.createElement("div",{className:"box"},l.a.createElement("h3",null,this.state.thirdScale[0]),l.a.createElement("div",null,this.state.thirdScale.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null,e))}))),l.a.createElement("div",{className:"box"},l.a.createElement("h3",null,this.state.fourthScale[0]),l.a.createElement("div",null,this.state.fourthScale.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null,e))}))),l.a.createElement("div",{className:"box"},l.a.createElement("h3",null,this.state.fifthScale[0]),l.a.createElement("div",null,this.state.fifthScale.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null,e))}))),l.a.createElement("div",{className:"box"},l.a.createElement("h3",null,this.state.sixthScale[0]),l.a.createElement("div",null,this.state.sixthScale.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement("span",null,e))})))),l.a.createElement("br",null),l.a.createElement("span",{onClick:this.replayIt.bind(this),className:"replay"},l.a.createElement(y.a,{icon:E.c})))}}]),t}(n.Component),k=[l.a.createElement("svg",{width:"60",height:"214",viewBox:"0 0 214 214",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("line",{x1:"23.3782",y1:"56.4454",x2:"188.824",y2:"56.4454",stroke:"white",strokeWidth:"4"}),l.a.createElement("line",{x1:"10.7899",y1:"91.5126",x2:"203.21",y2:"91.5126",stroke:"white",strokeWidth:"4"}),l.a.createElement("line",{x1:"10.7899",y1:"126.58",x2:"203.21",y2:"126.58",stroke:"white",strokeWidth:"4"}),l.a.createElement("line",{x1:"22.479",y1:"161.647",x2:"191.521",y2:"161.647",stroke:"white",strokeWidth:"4"}),l.a.createElement("rect",{x:"105.202",y:"81.8235",width:"96.2101",height:"20.6807",fill:"white"}),l.a.createElement("rect",{x:"105.202",y:"46.7563",width:"89.0168",height:"20.6807",fill:"white"}),l.a.createElement("rect",{x:"105.202",y:"116.891",width:"96.2101",height:"20.6807",fill:"white"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M107 214C166.094 214 214 166.094 214 107C214 47.9055 166.094 0 107 0C47.9055 0 0 47.9055 0 107C0 166.094 47.9055 214 107 214ZM107 200.661C158.728 200.661 200.661 158.728 200.661 107C200.661 55.2723 158.728 13.3388 107 13.3388C55.2723 13.3388 13.3388 55.2723 13.3388 107C13.3388 158.728 55.2723 200.661 107 200.661Z",fill:"white"})),l.a.createElement("svg",{width:"50",height:"214",viewBox:"0 0 214 214",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("line",{x1:"23.3782",y1:"56.4454",x2:"188.824",y2:"56.4454",stroke:"#87CABA",strokeWidth:"4"}),l.a.createElement("line",{x1:"10.7899",y1:"91.5126",x2:"203.21",y2:"91.5126",stroke:"#87CABA",strokeWidth:"4"}),l.a.createElement("line",{x1:"10.7899",y1:"126.58",x2:"203.21",y2:"126.58",stroke:"#87CABA",strokeWidth:"4"}),l.a.createElement("line",{x1:"22.479",y1:"161.647",x2:"191.521",y2:"161.647",stroke:"#87CABA",strokeWidth:"4"}),l.a.createElement("rect",{x:"105.202",y:"81.8235",width:"96.2101",height:"20.6807",fill:"#87CABA"}),l.a.createElement("rect",{x:"105.202",y:"46.7563",width:"89.0168",height:"20.6807",fill:"#87CABA"}),l.a.createElement("rect",{x:"105.202",y:"116.891",width:"96.2101",height:"20.6807",fill:"#87CABA"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M107 214C166.094 214 214 166.094 214 107C214 47.9055 166.094 0 107 0C47.9055 0 0 47.9055 0 107C0 166.094 47.9055 214 107 214ZM107 200.661C158.728 200.661 200.661 158.728 200.661 107C200.661 55.2723 158.728 13.3388 107 13.3388C55.2723 13.3388 13.3388 55.2723 13.3388 107C13.3388 158.728 55.2723 200.661 107 200.661Z",fill:"#87CABA"}))],x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={musicalNotes:d,chords:[],chordCount:[1,2],step1Opacity:1,display:!0,slide:"translatex(0px)",hovered:!1,hoveredNext:!1,isAbout:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getNotes",value:function(){for(var e=document.getElementsByClassName("select-css"),t=0;t<e.length;t++)if(e){var a=e[t].value,n=this.state.chords;n.push(a),this.setState({chords:n})}this.setState({step1Opacity:0,slide:"translatex(40px)"}),setTimeout(function(){this.setState({display:!1,step2Opacity:1})}.bind(this),1e3)}},{key:"addChord",value:function(){var e=this.state.chordCount,t=e.length+1;this.state.chordCount.length<10&&e.push([t,""]),this.setState({chordCount:e})}},{key:"removeChord",value:function(){var e=this.state.chordCount;e.pop(),this.setState({chordCount:e})}},{key:"hover",value:function(){this.setState({hovered:!this.state.hovered})}},{key:"hoverNext",value:function(){this.setState({hoveredNext:!this.state.hoveredNext})}},{key:"unhoverNext",value:function(){this.setState({hoveredNext:!this.state.hoveredNext})}},{key:"unhover",value:function(){this.setState({hovered:!this.state.hovered})}},{key:"replay",value:function(e){this.setState({display:e,step1Opacity:1,slide:"translatex(0px)",chords:[]})}},{key:"openAbout",value:function(){this.setState({isAbout:!0})}},{key:"closeAbout",value:function(){this.setState({isAbout:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},this.state.isAbout?l.a.createElement("div",{className:"closeTab"},l.a.createElement("span",{onClick:this.closeAbout.bind(this),className:"close"},l.a.createElement(y.a,{icon:E.d})),l.a.createElement("div",null,l.a.createElement("h3",null,"This app generates different keys of your favourite song. ",l.a.createElement("br",null),"All you have to do is grab your intrument, submit the original progression of your song, then you'll receive different variations to find the one that matches your voice. "),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Note:")," This app does not account for chord qualities like, minor, major and intervals... ",l.a.createElement("br",null),"If your chords have any quality like 7, 5, 9, aug or maj..., specify only the root chords and then add the qualities to the new chords respectively."))):null,l.a.createElement("span",{className:"logo"},k[0]),l.a.createElement("span",{onClick:this.openAbout.bind(this),className:"about"},l.a.createElement(y.a,{icon:E.b})),this.state.display?l.a.createElement("div",{style:{display:this.state.display,opacity:this.state.step1Opacity,transform:this.state.slide,minHeight:window.innerHeight-50},className:"step1"},l.a.createElement("h2",null,"Select the main chords",l.a.createElement("br",null),"that you want to change",l.a.createElement("br",null),"the scale of."),l.a.createElement("div",{className:"chordBox"},l.a.createElement(v.a,{component:l.a.Fragment,transitionName:"fade",transitionEnterTimeout:500,transitionLeaveTimeout:300},this.state.chordCount.map(function(e,t){return l.a.createElement("span",{key:t},l.a.createElement(m,null))}))),l.a.createElement("input",{className:"addBtn",onClick:this.addChord.bind(this),type:"button",value:"+"}),l.a.createElement("input",{className:"removeBtn",onClick:this.removeChord.bind(this),type:"button",value:"-"}),l.a.createElement("br",null),l.a.createElement("span",{onClick:this.getNotes.bind(this),className:"next"},l.a.createElement(y.a,{icon:E.a}))):l.a.createElement(f,{replay:this.replay.bind(this),chords:this.state.chords}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.2fb50d4a.chunk.js.map