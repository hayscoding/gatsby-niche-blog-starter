import React, { Component } from "react";
import Helmet from "react-helmet";
import MainNavBar from "../components/MainNavBar/MainNavBar";
import config from "../../data/SiteConfig";

class FreePage extends Component {
  render() {
    return (
      <div className="free-container">
        <Helmet title={`Free Stuff | ${config.siteTitle}`} />
        <div style={{display: 'inline-block', height: '50px', textAlign: 'center'}}>
      		<MainNavBar overlay={config.siteCover} />
        </div>
        <h1>Free stuff page</h1>
      </div>
    );
  }
}

export default FreePage;
