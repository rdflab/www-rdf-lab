import React from "react"

const IconLink = ({ icon, children, className }) => (
  <div className={`flex my-1 ${className}`}>
    <div className="mr-2">{icon}</div>

    <div>{children}</div>
  </div>
)

IconLink.defaultProps = {
  className: "",
}

export default IconLink
