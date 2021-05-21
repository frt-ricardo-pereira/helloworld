import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import NavBarTemplate from "../shared/navbarTemplate"

export default function Navbar() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query NavBarQueryQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templatekey: { eq: "navbar" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                linkName1
                linkName2
                linkName3
                linkName4
                ButtonName
                ButtonUrl
              }
            }
          }
        }
      }
    `
  )
  const front = allMarkdownRemark.edges[0].node.frontmatter
  return <NavBarTemplate
  linkName1={front.linkName1}
  linkName2={front.linkName2}
  linkName3={front.linkName3}
  linkName4={front.linkName4}
  ButtonName={front.ButtonName}
  ButtonUrl={front.ButtonUrl}

  ></NavBarTemplate>
}
