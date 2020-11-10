import React, { Component } from 'react';
import './Three.css';

class Three extends Component {
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
        <div className= "three">
        <button class= "tab3" onClick= {handleClick}>Show/Movie</button>
        {
          this.props.show.map((show, i) =>
        <div key= {i}>{show.score}</div>
          
          )
        }
  
        </div>
        )
    }
  };

export default Three;