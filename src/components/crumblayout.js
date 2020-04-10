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
      <Container className="min-h-screen">
        {crumbs.length > 0 && (
          <HideSmall>
            <Breadcrumb crumbs={crumbs} />
          </HideSmall>
        )}

        <div className="row items-center justify-between mb-4">
          {title !== "" && (
            <div className="mr-8">
              <Title>{title}</Title>
            </div>
          )}

          {titleComponent !== null ? titleComponent : ""}
        </div>
        {children}
      </Container>
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
