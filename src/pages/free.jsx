import React, { Component } from "react";
import Helmet from "react-helmet";

import MainNavBar from "../components/MainNavBar/MainNavBar";
import MainContent from "../layouts/MainContent/MainContent";

import config from "../../data/SiteConfig";

class FreePage extends Component {
  render() {
    return (
      <div className="free-container">
        <Helmet title={`Free Stuff | ${config.siteTitle}`} />
        <div style={{display: 'inline-block', height: '50px', textAlign: 'center'}}>
      		<MainNavBar overlay={config.siteCover} />
        </div>
        <MainContent className="page-template">
        	<h1>Free stuff page</h1>
        </MainContent>
      </div>
    );
  }
}

export default FreePage;
