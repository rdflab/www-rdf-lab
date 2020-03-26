import React from "react"
import { Link } from "gatsby"
import breadcrumbStyles from "./breadcrumb.module.scss"
import Container from "../container"
//import BreadcrumbLink from "./breadcrumblink"

const Breadcrumb = props => {
  return (
    <div className="bg-gray-200 p-0 hidden sm:block">
      <Container>
        <ul className={breadcrumbStyles.breadcrumb}>
          {props.crumbs.map((crumb, index) => (
            <li key={index}>
              <Link to={crumb[1]}>{crumb[0]}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Breadcrumb
