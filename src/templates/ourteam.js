import React from "react"
import { graphql } from "gatsby"
import Layout from "../shared/mainlayout"
import Seo from "../components/seo"
import FooterSection from "../components/sections/footerSection"
import OurTeamTemplate from "../templates/ourteamTemplate"
const OurTeam = ({ data }) => {
  const { markdownRemark: post } = data
  const { edges: members } = data.allMarkdownRemark
  return (
    <div class="flex flex-col h-screen  bg-gray-50 bg-opacity-20  ">
      <Layout>
        <Seo
          title={
            post.frontmatter.teamTitle1 + " " + post.frontmatter.teamTitle2
          }
        ></Seo>
         <OurTeamTemplate
          teamTitle1={post.frontmatter.teamTitle1}
          teamTitle2={post.frontmatter.teamTitle2}
          teamSubTitle={post.frontmatter.teamSubTitle}
          teamMembers={members}
         >


         </OurTeamTemplate>
         
        <FooterSection/>
   
       
      </Layout>

    </div>
  )
}

export default OurTeam

export const OurTeamPageQuery = graphql`
  query OurTeamPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        teamTitle1
        teamTitle2
        teamSubTitle
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templatekey: { eq: "teamMember" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            photo
            name
            job
            twitter
            facebook
            linkedin      
          }
        }
      }
    }
  }
`
