import IntroduceSection from "../components/sections/introduceSection"
import ColabSection from "../components/sections/colabSection"
import AboutSection from "../components/sections/aboutSection"
import TheProgramSection from "../components/sections/theprogramsection"
import NewsLetterSection from "../components/sections/newsletterSection"
import FooterSection from "../components/sections/footerSection"
import React from "react"

 const IndexTemplate = ({
  introTitle1,
  introTitle2,
  introDescription,
  introImage,
  colabTitle,
  aboutTitle1,
  aboutTitle2,
  aboutDescription,
  applyButtonName,
  applyButtonTo,
  sendEmailName,
  sendEmailTo,
  aboutBallonName1,
  aboutBallonDescription1,
  aboutBallonName2,
  aboutBallonDescription2,
  aboutBallonName3,
  aboutBallonDescription3,
  theProgramTitle,
  theProgramDescription,
  theProgramImage,
  newsletterTitle1,
  newsletterTitle2,
  newsletterSubscribeName
}) => {
  return (
    <div class="">
      <IntroduceSection
        introTitle1={introTitle1}
        introTitle2={introTitle2}
        introDescription={introDescription}
        introImage={introImage}
      ></IntroduceSection>
      <ColabSection colabTitle={colabTitle}></ColabSection>
      <AboutSection
        aboutTitle1={aboutTitle1}
        aboutTitle2={aboutTitle2}
        aboutDescription={aboutDescription}
        applyButtonName={applyButtonName}
        applyButtonTo={applyButtonTo}
        sendEmailName={sendEmailName}
        sendEmailTo={sendEmailTo}
        aboutBallonName1={aboutBallonName1}
        aboutBallonDescription1={aboutBallonDescription1}
        aboutBallonName2={aboutBallonName2}
        aboutBallonDescription2={aboutBallonDescription2}
        aboutBallonName3={aboutBallonName3}
        aboutBallonDescription3={aboutBallonDescription3}
      ></AboutSection>
      <TheProgramSection
        theProgramTitle={theProgramTitle}
        theProgramDescription={theProgramDescription}
        theProgramImage={theProgramImage}
      ></TheProgramSection>
      <NewsLetterSection
        newsletterTitle1={newsletterTitle1}
        newsletterTitle2={newsletterTitle2}
        newsletterSubscribeName={newsletterSubscribeName}
      ></NewsLetterSection>
      <FooterSection></FooterSection>
    </div>
  )
}
export default IndexTemplate