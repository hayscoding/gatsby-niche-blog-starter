import React, { Component } from "react";
import "./PageImage.css";

class PageImage extends Component {
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
    const { imageUrl, widthPx, rounded } = this.props;

    // console.log(this.state.width, " widthPx: ", widthPx)

	if(imageUrl && widthPx+50 < this.state.width && rounded) {
		const width = widthPx+"px"
	    return (
	      <div className="page-image">
	          <img className="circle-image" src={imageUrl} alt="Example Gif" style={{width: width, height: "auto"}}/>
	      </div>
	    );
	} else if(imageUrl && widthPx+50 < this.state.width) {
		const width = widthPx+"px"
	    return (
	      <div className="page-image">
	          <img src={imageUrl} alt="Example Gif" style={{width: width, height: "auto"}}/>
	      </div>
	    );
	} else if(imageUrl && rounded)
	    return (
	      <div className="page-image">
	          <img className="circle-image" src={imageUrl} alt="Example Gif" style={{maxWidth: "100%", height: "auto"}}/>
	      </div>
	    );
	else if(imageUrl)
	    return (
	      <div className="page-image">
	          <img src={imageUrl} alt="Example Gif" style={{maxWidth: "100%", height: "auto"}}/>
	      </div>
	    );
	else
		return null
  }
}

export default PageImage;
