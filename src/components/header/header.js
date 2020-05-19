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

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.98);
`

const IconSpan = styled.span`
  font-family: Orbitron;
  font-weight: 600;
  font-size: 1.4rem;
`

const Header = ({ title, content, menuContent }) => (
  <div>
    <HideSmall show={true}>
      <Nav aria-label="Navigation" className="row text-white p-3">
        <SlideMenu title={title} />
        <Link to="/">
          <ColumbiaICGWhiteImage style={{ width: `300px` }} />
        </Link>
      </Nav>
    </HideSmall>

    <HideSmall>
      <Nav
        aria-label="Navigation"
        className="fixed top-0 left-0 w-full z-40 border-b border-solid border-gray-300 py-2"
      >
        <Container className="">
          <Column className="justify-between items-center">
            <Column className="w-3/10 items-center">
              {/* <div> */}
              <Link to="/">
                <img
                  className="inline mr-3"
                  src={logo}
                  style={{ width: "280px" }}
                />
              </Link>
              {/* </div> */}

              {/* <div>
              <Link to="/">
                <IconSpan className="text-blue-500">dalla-favera lab</IconSpan>
              </Link>
              </div> */}
            </Column>
            <Column className="w-4/10 justify-center">
              <SiteSearch />
            </Column>
            <Column className="w-3/10 justify-end">
              <HeaderLinks />
            </Column>
          </Column>
        </Container>
        {/* <Container>
          <Column className="justify-center px-4">
            <HeaderLinks />
          </Column>
        </Container> */}
      </Nav>
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
