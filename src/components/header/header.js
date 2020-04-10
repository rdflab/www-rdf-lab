import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLinks from "./headerlinks"
import ColumbiaICGWhiteImage from "../images/columbiaicgwhiteimage"
import SlideMenu from "../slidemenu/slidemenu"
import Container from "../container"
import HideSmall from "../hidesmall"
import Column from "../column"
import SiteSearch from "../search/sitesearch"
import logo from "../../assets/svg/rdf-logo.svg"

import styled from "styled-components"
import background from "../../assets/images/benchwork.jpg"

const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Header = ({ title, content, menuContent }) => (
  <div>
    <HideSmall show={true}>
      <nav
        aria-label="Navigation"
        className="row text-white p-3 bg-blue-columbia-80"
      >
        <SlideMenu title={title} />
        <Link to="/">
          <ColumbiaICGWhiteImage style={{ width: `300px` }} />
        </Link>
      </nav>
    </HideSmall>

    <HideSmall>
      <nav
        aria-label="Navigation"
        className="fixed top-0 left-0 w-full z-40 bg-gray-800 py-3 mb-8"
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
      style={{position: "absolute", left: 0, bottom: 0, width: "100%", height: "15vh"}}>
    <polygon fill="white" points="0,100 100,0 100,100"/>
  </svg> */}

        {/* <Container>
          <Column className="justify-between border-b border-solid border-gray-200 mb-4">
          <Link to="/">
            <img src={logo} className="mr-8" style={{ width: "200px" }} />
          </Link>
            <HeaderLinks />

            <SiteSearch />

          </Column>
        </Container> */}

        <Container className="">
          <Column className="justify-between">
            <Column w={3}>
              <Link to="/">
                <img src={logo} className="mr-8" style={{ width: "200px" }} />
              </Link>
            </Column>
            <Column w={6} className="justify-center">
              <HeaderLinks />
            </Column>
            <Column w={3} className="justify-end">
              <SiteSearch />
            </Column>
          </Column>
        </Container>
        {/* <Container>
          <Column className="justify-center px-4">
            <HeaderLinks />
          </Column>
        </Container> */}
      </nav>
    </HideSmall>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "",
  content: null,
  menuContent: null,
}

export default Header
