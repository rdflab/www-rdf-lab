/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Breadcrumb from "./breadcrumb/breadcrumbv2"
import Title from "./title"
import Layout from "./layout"
import Container from "./container"
import HideSmall from "./hidesmall"
import Column from "./column"
import {
  FaBookOpen,
  FaUserFriends,
  FaNewspaper,
  FaLayerGroup,
} from "react-icons/fa"
import TextLink from "./textlink"
import SideLink from "./sidelink"

const SideLayout = ({
  title,
  titleComponent,
  headerComponent,
  menuComponent,
  children,
}) => {
  return (
    <Layout
      title={title}
      headerComponent={headerComponent}
      menuComponent={menuComponent}
    >
      <Container>
        <Column>
          <Column w={2} className="mt-4">
            <div className="w-full">
              <SideLink
                to={"/research-areas"}
                icon={<FaLayerGroup size={20} />}
              >
                Research Areas
              </SideLink>
              <SideLink to={"/people"} icon={<FaUserFriends size={20} />}>
                People
              </SideLink>

              <SideLink
                to={"/research-areas/publications"}
                icon={<FaBookOpen size={20} />}
              >
                Publications
              </SideLink>

              <SideLink to={"/news"} icon={<FaNewspaper size={20} />}>
                News
              </SideLink>
            </div>
          </Column>
          <Column w={10} className="min-h-screen p-8 pr-16">
            <div className="w-full">{children}</div>
          </Column>
        </Column>
      </Container>
    </Layout>
  )
}

SideLayout.defaultProps = {
  selectedTab: "",
  title: "",
  titleComponent: null,
  headerComponent: null,
  menuComponent: null,
}

export default SideLayout
