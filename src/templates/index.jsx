import React from "react";
import Helmet from "react-helmet";
import { Link as Scroll } from "react-scroll";
import Link from "gatsby-link";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Drawer from "../layouts/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../layouts/SiteWrapper/SiteWrapper";
import Footer from "../components/Footer/Footer";
import MainHeader from "../layouts/MainHeader/MainHeader";
import MainNav from "../layouts/MainNav/MainNav";
import MainNavBar from "../components/MainNavBar/MainNavBar";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import PageTitle from "../components/PageTitle/PageTitle";
import PageImage from "../components/PageImage/PageImage";
import Video from "../components/Video/Video";
import PageDescription from "../components/PageDescription/PageDescription";
import PageEmailForm from "../components/PageEmailForm/PageEmailForm";
import ProductVote from "../components/ProductVote/ProductVote";
import PaginatedContent from "../layouts/PaginatedContent/PaginatedContent";
import SocialMediaIcons from "../components/SocialMediaIcons/SocialMediaIcons";

const helmetTitle = "Hays Stanford"

const title = 'Stop Being a Slave. Make Money Online.'
const description = "Guide yourself to freedom with thousands of other members."

//Image Urls
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

    console.log('pathContext: ', this.props.pathContext)

    console.log(nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next,
      authorsEdges)

    return (

      <Drawer className="home-template" isOpen={this.state.menuOpen}>
        <Helmet title={helmetTitle} />
        <SEO postEdges={nodes} />

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          {/* All the main content gets inserted here */}
          <div className="home-template">
            {/* The big featured header */}
            <div style={{background: 'linear-gradient(to right bottom, #fff, #d8dfff)'}}>
              <MainHeader cover={config.siteCover} >
                <MainNavBar overlay={config.siteCover} />
                <div className="vertical">
                  <PageTitle text={title} />
                  <div className="main-header-content inner">
                    <div className="row">
                        <PageDescription text={description}/>
                    </div>
                    <div className="row">
                        <PageEmailForm />
                    </div>
                  </div>
                </div>
                <Scroll
                  className="scroll-down icon-arrow-left"
                  to="content"
                  style={{color: 'rgba(0, 0, 0, 0.75)'}}
                  data-offset="-45"
                  spy
                  smooth
                  duration={500}>
                  <span className="hidden">Scroll Down</span>
                </Scroll>
              </MainHeader>
            </div>

            <PaginatedContent
              page={page}
              pages={pages}
              total={total}
              limit={limit}
              prev={prev}
              next={next}>
              {/* PostListing component renders all the posts */}
              <PostListing postEdges={nodes} postAuthors={authorsEdges} />
            </PaginatedContent>
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
