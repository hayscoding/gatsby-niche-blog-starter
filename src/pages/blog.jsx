import React, { Component } from "react";
import Helmet from "react-helmet";
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
        <h1>Blog page</h1>
      </div>
    );
  }
}

export default BlogPage;
