import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderLinks from "./headerlinks"
import ColumbiaICGImage from "../images/columbiaicgimage"
import ColumbiaICGWhiteImage from "../images/columbiaicgwhiteimage"
import SlideMenu from "../slidemenu/slidemenu"
import Container from "../container"
import HideSmall from "../hidesmall"
import Column from "../column"
import TextLink from "../textlink"

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
      <div>
        <Container>
          <Column isVCentered={true} className="justify-between">
            <TextLink to="/" className="text-lg mr-8 uppercase tracking-widest">
              <span className="font-bold">Dalla-Favera</span> Lab
            </TextLink>

            {content !== null && content}
          </Column>
        </Container>
      </div>

      <nav aria-label="Navigation" className="mt-2">
        <Container>
          <Column isVCentered={true} className="justify-center">
            <HeaderLinks />

            {menuContent !== null && menuContent}
          </Column>
        </Container>
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
