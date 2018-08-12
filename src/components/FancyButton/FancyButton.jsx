import React, { Component } from "react";
import "./FancyButton.css";

class FancyButton extends Component {
  render() {
    const { onClick, text } = this.props;

    const showText = function() {return text ? text : () => { return " " }}
    return (
      <div className="fancy-button" href="#menu" onClick={onClick ? onClick : () => { return null }}>
        <span className="word">{showText()}</span>
      </div>
    );
  }
}

export default FancyButton;
