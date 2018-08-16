import React, { Component } from "react";
import "./Video.css";

class Video extends Component {
	constructor(props) {
	  super(props);
	  this.state = { width: 0, height: 0 };
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}


  render() {
    const width = 600
    const height = width * 9/16

    // console.log(this.state.width, " widthPx: ", widthPx)

		if(width && width+70 < this.state.width)
	    return (
	      <div className="video">
	    		<iframe width={width.toString()} height={height.toString()} src="https://www.youtube.com/embed/tcBBj9PY8vY?start=333" frameBorder="0" allowFullScreen></iframe>
	      </div>
	    );
		else if(width) {
			return (
	      <div className="video">
	    		<iframe width={250} height={250 * 9/16} src="https://www.youtube.com/embed/tcBBj9PY8vY?start=333" frameBorder="0" allowFullScreen></iframe>
	      </div>
	    );
		} else
			return null
  }
}

export default Video;
