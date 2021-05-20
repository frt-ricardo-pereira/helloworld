import React from "react"
import  IndexTemplate  from "../../templates/indexTemplate"

const IndexPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <IndexTemplate
        introTitle1={data.introTitle1}
        introTitle2={data.introTitle2}
        introDescription={data.introDescription}
        introImage={data.introImage}
        colabTitle={data.colabTitle}
        aboutTitle1={data.aboutTitle1}
        aboutTitle2={data.aboutTitle2}
        aboutDescription={data.aboutDescription}
        applyButtonName={data.aboutApplyButtonName}
        applyButtonTo={data.aboutApplyButtonTo}
        sendEmailName={data.aboutSendEmailName}
        sendEmailTo={data.aboutSendEmailTo}
        aboutBallonName1={data.aboutBallonName1}
        aboutBallonDescription1={data.aboutBallonDescription1}
        aboutBallonName2={data.aboutBallonName2}
        aboutBallonDescription2={data.aboutBallonDescription2}
        aboutBallonName3={data.aboutBallonName3}
        aboutBallonDescription3={data.aboutBallonDescription3}
        theProgramTitle={data.theProgramTitle}
        theProgramDescription={data.theProgramDescription}
        theProgramImage={data.theProgramImage}
        newsletterTitle1={data.newsletterTitle1}
        newsletterTitle2={data.newsletterTitle2}
        newsletterSubscribeName={data.newsletterSubscribeName}
      ></IndexTemplate>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPreview
