import React from "react"
import NewsItemDate from "./newsitemdate"
import BlueLink from "../bluelink"

const SideBarNewsItem = ({ item }) => (
  <article className="mb-4 pb-4">
    <NewsItemDate>{item.frontmatter.date}</NewsItemDate>
    <div>
      <BlueLink to={item.frontmatter.path}>{item.frontmatter.title}</BlueLink>
    </div>
  </article>
)

export default SideBarNewsItem
