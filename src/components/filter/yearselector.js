/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import SelectItem from "./selectitem"
import Column from "../column"

const AllType = ({ text, onClick, selected, children, className }) => (
  <SelectItem
    className={`font-semibold text-sm px-4 py-2 text-center trans-ani hover:bg-gray-200 ${className}`}
    selectedClassName="bg-gray-300"
    onClick={onClick}
    text={text}
    selected={selected}
  >
    {children}
  </SelectItem>
)

const SelectType = ({ text, onClick, selected, children }) => (
  <AllType
    className="border-l border-solid border-gray-400"
    onClick={onClick}
    text={text}
    selected={selected}
  >
    {children}
  </AllType>
)

const YearSelector = ({ maxYears, onClick }) => {
  const [selectedTypes, setSelectedTypes] = useState(["All"])

  const _handleClick = data => {
    const types = [data.text]
    setSelectedTypes(types)

    onClick(types)
  }

  const year = new Date().getFullYear()

  const years = []

  for (let i = 0; i < maxYears; ++i) {
    years.push(year - i)
  }

  return (
    <Column
      isVCentered={true}
      className="rounded-md border border-solid border-gray-400 cursor-pointer overflow-hidden"
    >
      <AllType
        onClick={_handleClick}
        text="All"
        selected={selectedTypes[0] === "All"}
      >
        All
      </AllType>

      {years.map((year, index) => (
        <SelectType
          key={index}
          onClick={_handleClick}
          text={year}
          selected={selectedTypes[0] === year}
        >
          {year}
        </SelectType>
      ))}
    </Column>
  )
}

YearSelector.defaultProps = {
  maxYears: 5,
}

export default YearSelector
