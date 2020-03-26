import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import flattenEdges from "../../utils/flattenedges"
import HeaderLink from "./headerlink"
import TextLink from "../textlink"

const HeaderLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      links: allHeaderlinksJson {
        edges {
          node {
            name
            link
          }
        }
      }
    }
  `)

  const links = flattenEdges(data.links.edges)

  return (
    <div>
      {links.map((link, index) => {
        return (
          <TextLink
            key={index}
            aria-label={`Goto ${link.name}`}
            to={link.link}
            className="mr-8 px-4 py-2"
          >
            {link.name}
          </TextLink>
        )
      })}
    </div>
  )
}

export default HeaderLinks
