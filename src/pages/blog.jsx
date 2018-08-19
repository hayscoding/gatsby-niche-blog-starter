import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
    return (
      <div className="blog-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <h1>Blog page</h1>
      </div>
    );
  }
}

export default BlogPage;
