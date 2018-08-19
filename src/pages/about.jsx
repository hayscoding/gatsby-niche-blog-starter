import React, { Component } from "react";
import Helmet from "react-helmet";
import MainNavBar from "../components/MainNavBar/MainNavBar";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div style={{display: 'inline-block', height: '50px', textAlign: 'center'}}>
      		<MainNavBar overlay={config.siteCover} />
        </div>
      	<About />
      </div>
    );
  }
}

export default AboutPage;
