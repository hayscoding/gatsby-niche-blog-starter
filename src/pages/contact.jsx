import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h1>Contact page</h1>
      </div>
    );
  }
}

export default ContactPage;
