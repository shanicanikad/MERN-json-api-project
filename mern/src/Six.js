import React, { Component } from 'react';
import './Six.css';

class Six extends Component {
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
        <div className= "six">
        <button class= "tab6" onClick= {handleClick}>Show/Movie</button>
        {
          this.props.show.map((show, i) =>
        <div key= {i}>{show.score}</div>
          
          )
        }
  
        </div>
        )
    }
  };

export default Six;