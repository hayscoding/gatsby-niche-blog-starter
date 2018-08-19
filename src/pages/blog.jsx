import React, { Component } from "react";
import Helmet from "react-helmet";

import MainContent from "../layouts/MainContent/MainContent";
import MainNavBar from "../components/MainNavBar/MainNavBar";
import PaginatedContent from "../layouts/PaginatedContent/PaginatedContent";
import PostListing from "../components/PostListing/PostListing";

import config from "../../data/SiteConfig";

class BlogPage extends Component {
  render() {
  	const {
      page,
      pages,
      prev,
      next
    } = this.props.data.posts.edges;

    const nodes = this.props.data.posts.edges;
    const total = this.props.data.posts.totalCount;

   console.log('posts: ', this.props.data.posts)
   console.log('authors: ', this.props.data.authors)

    const limit = config.sitePaginationLimit //Max number of posts per page
    const authorsEdges = this.props.data.authors.edges;

    console.log("passedConsts: ",
      nodes,
      page,
      pages,
      total,
      limit,
      prev,
      next,
      authorsEdges)
    
    return (
      <div className="blog-container">
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <div style={{display: 'inline-block', height: '50px', textAlign: 'center'}}>
      		<MainNavBar overlay={config.siteCover} />
        </div>
        <MainContent className="page-template">
        	<h1>Blog page</h1>
        	{/* <PaginatedContent
            page={page}
            pages={pages}
            total={total}
            limit={limit}
            prev={prev}
            next={next}>*/}
            {/* PostListing component renders all the posts */}
           {/*  <PostListing postEdges={nodes} postAuthors={authorsEdges} />
          </PaginatedContent>*/}
        </MainContent>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const blogQuery = graphql`
  query BlogQuery {
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
    # posts data comes from this query
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
            cover
            date
            category
            author
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }`;

export default BlogPage;
