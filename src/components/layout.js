/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

//import "../assets/css/global.scss"
import "../assets/css/global.scss"

import Header from "./header/header"
import Footer from "./footer/footer"
import SEO from "./seo"

const Layout = ({
  title,
  children,
  crumbs,
  headerComponent,
  menuComponent,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Orbitron:600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {title !== "" && <SEO title={title} />}

      {/* <Header
        title={title}
        content={headerComponent}
        menuContent={menuComponent}
      /> */}

      <main>{children}</main>

      <Footer siteTitle={data.site.siteMetadata.title}></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  crumbs: [],
  selectedTab: "",
  title: "",
  headerComponent: null,
  menuComponent: null,
}

export default Layout
