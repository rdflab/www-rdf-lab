import React from "react"
import { Link } from "gatsby"

const SideLink = ({ icon, to, children }) => (
  <Link className="side-link" activeClassName="side-link-active" to={to}>
    <div className="flex items-center">
      <div className="mr-2">{icon}</div>
      <div>{children}</div>
    </div>
  </Link>
)

export default SideLink
