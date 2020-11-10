import React, { Component } from 'react';
import './Four.css';

class Four extends Component {
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
        <div className= "four">
        <button class= "tab4" onClick= {handleClick}>Show/Movie</button>
        {
          this.props.show.map((show, i) =>
        <div key= {i}>{show.score}</div>
          
          )
        }
  
        </div>
        )
    }
  };

export default Four;