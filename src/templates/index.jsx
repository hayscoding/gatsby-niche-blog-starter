import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-scroll";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import MainContent from "../layouts/MainContent/MainContent";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageImage from "../components/PageImage/PageImage";
import PageDescription from "../components/PageDescription/PageDescription";
import PageEmailForm from "../components/PageEmailForm/PageEmailForm";
import ProductVote from "../components/ProductVote/ProductVote";
import PaginatedContent from "../layouts/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

const gifUrl = './images/sample-project-2.gif'

class IndexTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  showSignup() {
    if(this.state.width < 768)
      return(
        <div id="signup" style={styles.signupSmall}>
          <h2 style={{color: "black", paddingBottom: '20px'}}>Sign Up Now!</h2>
          <PageEmailForm />
        </div>
      )
    else
      return(
        <div id="signup" style={styles.signup}>
          <h2 style={{color: "black", paddingBottom: '20px'}}>Sign Up Now!</h2>
          <PageEmailForm />
        </div>
      )
  }

  render() {
    const {
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next
    } = this.props.pathContext;
    const authorsEdges = this.props.data.authors.edges;

    return (

      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={nodes} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template" style={{background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}>
            {/* The big featured header */}
            <MainHeader cover={config.siteCover}>
              {/*
              <MainNav overlay={config.siteCover}>
              </MainNav>
              */}
              <div className="vertical">
                <PageTitle text={config.siteTitle} />
                <div className="main-header-content inner">
                  <div className="row">
                    <div className="col left">
                      <PageDescription text={config.siteDescription} />
                      <Link
                        to="signup"
                        data-offset="-45"
                        spy
                        smooth
                        duration={500}>
                        <ProductVote />
                      </Link>
                    </div>

                    <div className="col right">
                      <PageImage imageUrl={gifUrl} />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="scroll-down icon-arrow-left"
                to="content"
                data-offset="-45"
                spy
                smooth
                duration={500}>
                <span className="hidden">Scroll Down</span>
              </Link>
            </MainHeader>
            <MainContent>
              <div id="tools" style={styles.mainDiv}>
                <br />
                <br />
                <br />
                <div  style={styles.mainCol}>
                  <h2 style={{color: "black"}}>Build Apps With React and Node.js</h2>
                  <hr style={styles.regLine}/>
                  <div className="row">
                    <div className="small-col small-left">
                      <PageImage imageUrl={'./images/node-js-logo.png'} widthPx={200} />
                    </div>
                    <div className="small-col small-right">
                      <PageImage imageUrl={'./images/react-logo.png'} widthPx={300} />
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
            <MainContent>
              <div id="testimonials" style={styles.mainDiv}>
                <div  style={styles.mainCol}>
                  <h2 style={{color: "black"}}>Work Together or Alone</h2>
                  <hr style={styles.regLine}/>
                  <div className="row">
                    <div style={styles.circleImage} className="multi-col">
                      <PageImage imageUrl={'./images/person-1.jpg'} widthPx={150} rounded={true} />
                    </div>
                    <div className="multi-col">
                      <PageImage imageUrl={'./images/person-2.jpg'} widthPx={150} rounded={true}/>
                    </div>
                    <div className="multi-col">
                      <PageImage imageUrl={'./images/person-3.jpg'} widthPx={150} rounded={true}/>
                    </div>
                    <div className="multi-col">
                      <PageImage imageUrl={'./images/person-5.jpg'} widthPx={150} rounded={true}/>
                    </div>
                    <div className="multi-col">
                      <PageImage imageUrl={'./images/person-4.jpg'} widthPx={150} rounded={true}/>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
            <MainContent>
             <div id="content" style={styles.mainDiv}>
                <div style={styles.mainCol}>
                <div className="row">
                    <div className="small-col small-left">
                      <PageImage imageUrl={'./images/instructor.jpg'} widthPx={350} rounded={true}/>
                    </div>
                    <div className="small-col small-right">
                      <h2 style={{color: "black", paddingBottom: '20px'}}>Hays Stanford</h2>
                      My name is Hays Stanford and I'll be your instructor. You will be provided with step-by-step details on how to build the projects you and your fellow students choose. 
                      <br /><br />
                      I will show you how to break a product idea into small, managable bits. We will then execute each of the steps until the idea has been brought to life.
                    </div>
                  </div>
                  
                  <hr style={styles.regLine}/>
                    {this.showSignup()}
                </div>
                <br />
                <br />
                <br />
              </div>
            </MainContent>
            </div>

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

const styles = {
  mainDiv: {
    textAlign: 'center', 
    maxWidth: "100%", 
    background: "#262A30", 
    margin: "auto"
  },
  mainCol: {
    textAlign: 'center', 
    background: "rgba(255, 255, 255, 1)", 
    width: "70%", 
    margin: "auto",
    padding: "3.5% 6%",
    borderRadius: '20px',
  },
  regLine: {
    height: '3px', 
    background: "#dddddd", 
    width: "70%", 
    margin: "40px auto"
  },
  signup: {
    margin: 'auto',
    maxWidth: '1000px',
    padding: '2.5% 0%',
    background: '#d6d6d6'
  },
  signupSmall: {
    margin: 'auto',
    maxWidth: '100%',
    padding: '2.5% 0%',
    background: '#fff'
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    # posts data comes from the context
    # authors
    authors: allAuthorsJson {
      edges {
        node {
          id
          name
          image
          url
          bio
        }
      }
    }
  }
`;

export default IndexTemplate;
