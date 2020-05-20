/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Breadcrumb from "./breadcrumb/breadcrumbv2"
import Title from "./title"
import SideLayout from "./sidelayout"
import Layout from "./layout"
import Container from "./container"
import HideSmall from "./hidesmall"

const CrumbLayout = ({
  title,
  titleComponent,
  headerComponent,
  menuComponent,
  children,
  crumbs,
}) => {
  return (
    <Layout
      title={title}
      headerComponent={headerComponent}
      menuComponent={menuComponent}
    >
      <div className=" min-h-screen">
        {crumbs.length > 0 && (
          <HideSmall className=" shadow-md mb-4">
            <Breadcrumb crumbs={crumbs} />
          </HideSmall>
        )}

        {children}
      </div>
    </Layout>
  )
}

CrumbLayout.defaultProps = {
  crumbs: [],
  selectedTab: "",
  title: "",
  titleComponent: null,
  headerComponent: null,
  menuComponent: null,
}

export default CrumbLayout
