import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLinks from "./headerlinks"
import ColumbiaICGWhiteImage from "../images/columbiaicgwhiteimage"
import SlideMenu from "../slidemenu/slidemenu"
import Container from "../container"
import HideSmall from "../hidesmall"
import Column from "../column"
import TextLink from "../textlink"
import LogoImage from "../logoimage"

const Header = ({ title, content, menuContent }) => (
  <div className="fixed w-full z-50 bg-white opacity-97 py-2 border-b border-solid border-gray-200">
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
        className="flex items-center justify-between py-2 px-4"
      >
        <div className="flex">
          <Link to="/">
            <LogoImage style={{ width: "200px" }} className="mr-8" />
          </Link>
          <HeaderLinks />
        </div>
        <div className="flex flex-grow">{content !== null && content}</div>
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
