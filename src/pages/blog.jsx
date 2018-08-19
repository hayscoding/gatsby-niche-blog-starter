import React, { Component } from "react";
import Helmet from "react-helmet";

import MainContent from "../layouts/MainContent/MainContent";
import MainNavBar from "../components/MainNavBar/MainNavBar";

import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    return (
      <div className="blog-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <div style={{display: 'inline-block', height: '50px', textAlign: 'center'}}>
      		<MainNavBar overlay={config.siteCover} />
        </div>
        <MainContent className="page-template">
        	<h1>Blog page</h1>
        </MainContent>
      </div>
    );
  }
}

export default BlogPage;
