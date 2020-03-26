import React from "react"

const MainSectionBreak = ({ title, children, align, className }) => (
  <>
    <hr
      className={`w-1/12 border-2 border-solid border-blue-700 mt-8 mb-2 ${align}`}
    />

    {title !== "" && <h2 className="text-blue-700 mb-2">{title}</h2>}

    {children}
  </>
)

MainSectionBreak.defaultProps = {
  title: "",
  className: "",
  align: "text-left",
}

export default MainSectionBreak
