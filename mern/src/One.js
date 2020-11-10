import React, { Component } from 'react';
import './One.css';

class One extends Component {
  constructor(props){
      super(props)
      this.state= {
          show: this.props
          
      }
  }


  render() {

      function handleClick() {
      }

      return (
      <div className= "one">
      <button class= "tab1" onClick= {handleClick}>Show/Movie</button>
      {
        this.props.show.map((show, i) =>
      <div key= {i}>{show.score}</div>
        
        )
      }

      </div>
      )
  }
};



// function One(props) {
//     return (
//         console.log("hey", props.synopsis)
// //         <div className="one">
// //             <button className="tab1">Show/Movie</button>
// //         </div>
//     );
// }


export default One;