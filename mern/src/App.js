import React, { Component, useEffect, useState } from 'react';
import { Link, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Title from "./Title";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";


function App() {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    let url = "https://sd-json-api-project.herokuapp.com/Naruto";

    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((title) => {
        console.log(title);
        setTitle(title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
}
const [synopsis, setSynopsis] = useState([]);

useEffect(() => {
  let url = "https://sd-json-api-project.herokuapp.com/Naruto";

  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((synopsis) => {
      console.log(synopsis);
      setSynopsis(synopsis);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

// let url = "https://sd-json-api-project.herokuapp.com/Naruto";

// const options = {
//   method: "GET",
//   headers: {
//     Accept: "application.json",
//   }
// };



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: [],
//     };

//   }
//   componentDidMount() {
//     let url = "https://sd-json-api-project.herokuapp.com/Naruto";
//     fetch(url)
//       .then(res => res.json())
//       .then(show =>
//         this.setState({ show: show })
//       )
//   }

// render() {
//   console.log("hey", this.state.show)
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
        {/* <One show={this.state.show} /> */}
        <Route
          exact
          path="/synopsis"
          render={() => {
            return <One />;
          }}
        />
        <button class="postButton1">POST</button>
        <button class="deleteButton1">DELETE</button>
      </div>
      <div class="two2">
        {/* <Two show={this.state.show} /> */}
        <Route
          exact
          path="/synopsis"
          render={() => {
            return <Two/>;
          }}
        />
        <button class="postButton2">POST</button>
        <button class="deleteButton2">DELETE</button>
      </div>
      <div class="three3">
        {/* <Three show={this.state.show} /> */}
        <Route
          exact
          path="/synopsis"
          render={() => {
            return <Three />;
          }}
        />
        <button class="postButton3">POST</button>
        <button class="deleteButton3">DELETE</button>
      </div>
      <div class="four4">
        {/* <Four show={this.state.show} /> */}
        <Route
          exact
          path="/synopsis"
          render={() => {
            return <Four />;
          }}
        />
        <button class="postButton4">POST</button>
        <button class="deleteButton4">DELETE</button>
      </div>
      <div class="five5">
        {/* <Five show={this.state.show} /> */}
        <Route
          exact
          path="/synopsis"
          render={() => {
            return <Five />;
          }}
        />
        <button class="postButton5">POST</button>
        <button class="deleteButton5">DELETE</button>
      </div>
      <div class="six6">
        {/* <Six show={this.state.show} /> */}
        <Route
          exact
          path="/synopsis"
          render={() => {
            return <Six />;
          }}
        />
        <button class="postButton6">POST</button>
        <button class="deleteButton6">DELETE</button>
      </div>
    </main>
  </div>
);



export default App;