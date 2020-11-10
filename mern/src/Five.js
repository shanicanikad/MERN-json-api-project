import React, { Component } from 'react';
import './Five.css';

class Five extends Component {
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
        <div className= "five">
        <button class= "tab5" onClick= {handleClick}>Show/Movie</button>
        {
          this.props.show.map((show, i) =>
        <div key= {i}>{show.score}</div>
          
          )
        }
  
        </div>
        )
    }
  };

export default Five;