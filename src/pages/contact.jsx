import React, { Component } from "react";
import Helmet from "react-helmet";
import MainNavBar from "../components/MainNavBar/MainNavBar";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <div style={{display: 'inline-block', height: '50px', textAlign: 'center'}}>
      		<MainNavBar overlay={config.siteCover} />
        </div>
        <h1>Contact page</h1>
      </div>
    );
  }
}

export default ContactPage;
