import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../shared/mainlayout"
import IndexTemplate from "../templates/indexTemplate"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Seo title={post.frontmatter.introTitle1 + " " + post.frontmatter.introTitle2}></Seo>
      <IndexTemplate
        introTitle1={post.frontmatter.introTitle1}
        introTitle2={post.frontmatter.introTitle2}
        introDescription={post.frontmatter.introDescription}
        introImage={post.frontmatter.introImage}
        colabTitle={post.frontmatter.colabTitle}
        aboutTitle1={post.frontmatter.aboutTitle1}
        aboutTitle2={post.frontmatter.aboutTitle2}
        aboutDescription={post.frontmatter.aboutDescription}
        applyButtonName={post.frontmatter.aboutApplyButtonName}
        applyButtonTo={post.frontmatter.aboutApplyButtonTo}
        sendEmailName={post.frontmatter.aboutSendEmailName}
        sendEmailTo={post.frontmatter.aboutSendEmailTo}
        aboutBallonName1={post.frontmatter.aboutBallonName1}
        aboutBallonDescription1={post.frontmatter.aboutBallonDescription1}
        aboutBallonName2={post.frontmatter.aboutBallonName2}
        aboutBallonDescription2={post.frontmatter.aboutBallonDescription2}
        aboutBallonName3={post.frontmatter.aboutBallonName3}
        aboutBallonDescription3={post.frontmatter.aboutBallonDescription3}
        theProgramTitle={post.frontmatter.theProgramTitle}
        theProgramDescription={post.frontmatter.theProgramDescription}
        theProgramImage={post.frontmatter.theProgramImage}
        newsletterTitle1={post.frontmatter.newsletterTitle1}
        newsletterTitle2={post.frontmatter.newsletterTitle2}
        newsletterSubscribeName={post.frontmatter.newsletterSubscribeName}

      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}


export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        introTitle1
        introTitle2
        introDescription
        introImage

        colabTitle

        aboutTitle1
        aboutTitle2
        aboutDescription
        aboutSendEmailName
        aboutSendEmailTo
        aboutApplyButtonName
        aboutApplyButtonTo
        aboutBallonName1
        aboutBallonDescription1
        aboutBallonName2
        aboutBallonDescription2
        aboutBallonName3
        aboutBallonDescription3

        theProgramTitle
        theProgramDescription
        theProgramImage

        newsletterTitle1
        newsletterTitle2
        newsletterSubscribeName
      }
    }
  }
`
