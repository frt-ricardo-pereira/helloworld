import React from "react"
import { graphql } from "gatsby"
import Layout from "../shared/mainlayout"
import Seo from "../components/seo"
import FooterSection from "../components/sections/footerSection"
import Page from "../templates/donationsTemplate"
const Donation = ({ data }) => {
  const { markdownRemark: post } = data
 
  return (
    <div class="flex flex-col h-screen  bg-gray-50 bg-opacity-30  ">
      <Layout>
        <Seo
          title={
            post.frontmatter.donationTitle1 + " " + post.frontmatter.donationTitle2
          }
        ></Seo>
         <Page
          donationTitle1={post.frontmatter.donationTitle1}
          donationTitle2={post.frontmatter.donationTitle2}
          donatioSubTitle={post.frontmatter.donatioSubTitle}
         >
         </Page>
         
        <FooterSection/>
   
       
      </Layout>

    </div>
  )
}

export default Donation

export const DonationPageQuery = graphql`
  query DonationPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        donationTitle1
        donationTitle2
        donatioSubTitle
      }
    }  
   }
  
`
