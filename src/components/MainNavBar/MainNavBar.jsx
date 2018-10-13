import React, { Component } from "react";
import Link from "gatsby-link";
import MainNav from "../../layouts/MainNav/MainNav";
import "./MainNavBar.css";

class MainNavBar extends Component {
  render() {
    const { overlay } = this.props;

    return (
      <MainNav overlay={overlay}>
        <div style={{display: 'flex', maxWidth: '900px', margin: 'auto'}} >
          <Link to='/'>
            <h3 style={{flex: '1', color: '#f7f7f7'}}>Hays Stanford</h3>
          </Link>
          <div style={{flex: '2', color: '#f7f7f7'}}></div>
          <div style={{flex: '2', display: 'flex', margin: 'auto'}}>
            <Link to='/blog/' style={{flex: '1'}}>
              <h5 style={{color: '#f7f7f7'}}>Blog</h5>
            </Link>
            <Link to='/about/' style={{flex: '1'}}>
              <h5 style={{color: '#f7f7f7'}}>About</h5>
            </Link>
            <Link to='/contact/' style={{flex: '1'}}>
              <h5 style={{color: '#f7f7f7'}}>Contact</h5>
            </Link>
          </div>
        </div>
      </MainNav>
    );
  }
}

export default MainNavBar;
