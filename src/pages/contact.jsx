import React, { Component } from "react";
import Helmet from "react-helmet";

import MainNavBar from "../components/MainNavBar/MainNavBar";
import MainContent from "../layouts/MainContent/MainContent";

import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <div style={{display: 'inline-block', height: '50px', textAlign: 'center'}}>
      		<MainNavBar overlay={config.siteCover} />
        </div>
        <MainContent className="page-template">
        	<h1>Contact page</h1>
        </MainContent>
      </div>
    );
  }
}

export default ContactPage;
