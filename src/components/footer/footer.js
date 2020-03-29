import React from "react"
import HICCCImage from "../hicccimage"
import FooterLinks from "./footerlinks"
import Container from "../container"
import Column from "../column"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="text-white text-sm mt-8 py-8 bg-gray-600">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex mr-8">
              &copy; {new Date().getFullYear()} {siteTitle}
            </div>
            <div className="flex">
              <FooterLinks />
            </div>
          </div>

          <div className="flex items-center">
            <a href="https://cumc.columbia.edu">
              <HICCCImage style={{ width: "400px" }} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
