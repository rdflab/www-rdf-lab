import React from "react"
import FooterLinks from "./footerlinks"
import Container from "../container"
import Column from "../column"
import cuimcsvg from "../../assets/svg/cuimc-white.svg"

const Footer = ({ siteTitle }) => {
  return (
    <footer className="text-white text-sm mt-8 py-8 bg-gray-600">
      <Container>
        {/* <div className="row items-center mb-4">
            <FooterLinks />
         </div> */}
        <div className="row items-center mb-4">
          <div>
            &copy; {new Date().getFullYear()} {siteTitle}
          </div>
        </div>

        <div className="row items-center mb-4">
          <a href="https://cumc.columbia.edu">
            <img src={cuimcsvg} className="h-10" alt="CUIMC Logo" />
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
