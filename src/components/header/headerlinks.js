import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import flattenEdges from "../../utils/flattenedges"
import HeaderLink from "./headerlink"
import { Link } from "gatsby"
import { FaBookOpen, FaNewspaper, FaUserFriends, FaLayerGroup } from "react-icons/fa"

const HeadLink = ({icon, to, children}) => (
  <Link
    className="head-link"
    activeClassName="head-link-active"
    to={to}
  >
  <div className="flex items-center">
                <div className="mr-2">{icon}</div>
                <div>{children}</div>
              </div>

  </Link>
)


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
    <div className="flex items-center justify-end border-b border-solid border-gray-200 text-sm mb-2">
      {/* {links.map((link, index) => {
        return (
          <HeaderLink
            key={index}
            aria-label={`Goto ${link.name}`}
            to={link.link}
          >
            {link.name}
          </HeaderLink>


        )
      })} */}
      <HeadLink to={'/research-areas'} icon={<FaLayerGroup size={20}/>}>
                Research Areas
              </HeadLink>

            <HeadLink to={'/people'} icon={<FaUserFriends size={20}/>}>
                People
              </HeadLink>

              <HeadLink to={'/research-areas/publications'} icon={<FaBookOpen size={20}/>}>
                Publications
              </HeadLink>

              <HeadLink to={'/news'} icon={<FaNewspaper size={20}/>}>
                News
              </HeadLink>
    </div>
  )
}

export default HeaderLinks
