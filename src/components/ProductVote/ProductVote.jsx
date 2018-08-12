import React from "react";
import FancyButton from "../FancyButton/FancyButton";

import "./ProductVote.css";

class ProductVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value});
  }

  render() {
  	const { text } = this.props;

    return(
      <div className="product-vote">
        <h1 className="title">What do you want to do first?</h1>
        <form name="product-vote" action="#" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      		{/*Hiddin inputs necessary for use with Netlify hosting to use free form function*/}
          <input type="hidden" name="form-name" value="product-vote" />
          <input type="hidden" name="bot-field" />
          <label><input required type="radio" name="facebook" value="0" /></label><FancyButton text="Rebuild Facebook" /><br />
          <label><input required type="radio" name="money-app" value="1" /></label><FancyButton text="Create a Money Managing App" /><br />
          <label><input required type="radio" name="reddit-bot" value="2" /></label><FancyButton text="Build a Reddit Bot" /><br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default ProductVote;
