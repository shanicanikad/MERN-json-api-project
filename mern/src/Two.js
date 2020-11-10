import React, { Component } from 'react';
import './Two.css';

class Two extends Component {
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
      <div className= "two">
      <button class= "tab2" onClick= {handleClick}>Show/Movie</button>
      {
        this.props.show.map((show, i) =>
      <div key= {i}>{show.score}</div>
        
        )
      }

      </div>
      )
  }
};

export default Two;