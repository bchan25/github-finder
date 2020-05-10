import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/Users";
import axios from "axios";
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get("https://api.github.com/users")
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <User />
        </div>
      </div>
    );
  }
}

export default App;
