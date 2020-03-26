import React from "react"

// <div
//   className={`columns is-marginless is-paddingless ${
//     isVCentered ? "is-vcentered" : ""
//   } ${className}`}
//   onClick={onClick}
// >

const Column = ({
  children,
  w,
  isMobile,
  isCentered,
  isVCentered,
  onClick,
  className,
}) => {
  let baseClass = "flex"

  if (isMobile) {
    baseClass = `${baseClass} flex-row ${w !== "" ? `w-${w}/12` : "w-full"}`
  } else {
    baseClass = `${baseClass} flex-col md:flex-row ${
      w !== "" ? `md:w-${w}/12` : "w-full"
    }`
  }

  if (isCentered) {
    baseClass = `${baseClass} justify-center`
  }

  if (isVCentered) {
    baseClass = `${baseClass} items-center`
  }

  return (
    <div className={`${baseClass} ${className}`} onClick={onClick}>
      {children}
    </div>
  )
}

Column.defaultProps = {
  w: "",
  className: "",
  isMobile: false,
  isCentered: false,
  isVCentered: false,
}

export default Column
