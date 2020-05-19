import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"

const SiteSearchBar = ({
  handleInputChange,
  placeholder,
  text,
  className,
  selected,
}) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = e => {
    setHover(true)
  }

  const onMouseLeave = e => {
    setHover(false)
  }

  return (
    <div
      className={`row z-40 text-gray-900 px-4 py-2 rounded-md border border-solid border-gray-200 items-center justify-between trans-ani ${
        hover || selected ? "bg-white border-gray-300" : "bg-gray-200"
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex">
        <FaSearch
          className={`${
            hover ? "text-blue-400" : "text-gray-400"
          } trans-ani mr-2`}
        />
      </div>
      <div className="flex w-full">
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholder}
          value={text}
          onChange={handleInputChange}
          className="bg-transparent w-full border-none outline-none"
        />
      </div>
    </div>
  )
}

SiteSearchBar.defaultProps = {
  placeholder: "Type to find items...",
  text: "",
  selected: false,
}

export default SiteSearchBar
