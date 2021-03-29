import React, { Component } from "react";
import "./App.css";
import LifeCycle from './LifeCycle';
import ErrorCase from './ErrorCase';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16); //16진수로 변환
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorCase>
          <LifeCycle color={this.state.color}/>
        </ErrorCase>
      </div>
    )
  }
};

export default App;
