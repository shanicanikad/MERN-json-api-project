import React, { Component } from 'react';
import './App.css';
import Title from "./Title";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";

let url = "https://sd-json-api-project.herokuapp.com/Naruto";

const options = {
  method: "GET",
  headers: {
    Accept: "application.json",
  }
};



class App extends Component {
  constructor() {
    super();
    this.state = {
      show: [],
    };

  }
  componentDidMount() {
    let url = "https://sd-json-api-project.herokuapp.com/Naruto";
    fetch(url)
      .then(res => res.json())
      .then(show =>
        this.setState({ show: show })
      )
  }

  render() {
    console.log("hey", this.state.show)
    return (
      <div className="App">
        <Title />
        <div class="input">
          {/* <form>
            <input class="input" type="text" />
            <input class="submit" type="submit" />
          </form> */}
        </div>
        <main className="All">
          <div class="one1">
            <One show={this.state.show} />
            <button class="postButton1">POST</button>
            <button class="deleteButton1">DELETE</button>
          </div>
          <div class="two2">
            <Two show={this.state.show} />
            <button class="postButton2">POST</button>
            <button class="deleteButton2">DELETE</button>
          </div>
          <div class="three3">
            <Three show={this.state.show} />
            <button class="postButton3">POST</button>
            <button class="deleteButton3">DELETE</button>
          </div>
          <div class="four4">
            <Four show={this.state.show} />
            <button class="postButton4">POST</button>
            <button class="deleteButton4">DELETE</button>
          </div>
          <div class="five5">
            <Five show={this.state.show} />
            <button class="postButton5">POST</button>
            <button class="deleteButton5">DELETE</button>
          </div>
          <div class="six6">
            <Six show={this.state.show} />
            <button class="postButton6">POST</button>
            <button class="deleteButton6">DELETE</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;