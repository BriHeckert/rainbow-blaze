import React, { Component } from "react";
import './App.css';
import axios from 'axios'; 


class App extends Component {
  // add a constructor to take props
  constructor(props) {
    super(props);
     
    // add the props here
    this.state = {
     
      // the viewCompleted prop represents the status
      // of the task. Set it to false by default
      activeItem: {
        title: "",
        description: "",
      },
    };
  }

  refreshList = () => {
    axios   //Axios to send and receive HTTP requests
      .get("http://localhost:8000/api/guides/")
      .then(res => this.setState({ guideList: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this.state.title
          </p>
          <ul className="list-group list-group-flush">
                {this.state.title}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
