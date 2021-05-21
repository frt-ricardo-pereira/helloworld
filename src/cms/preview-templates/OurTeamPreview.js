import React from "react"
import  Page  from "../../templates/ourteamTemplate"

const IndexPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    console.log(data.introTitle1)
    return (
      <Page
      teamTitle1={data.teamTitle1}
      teamTitle2={data.teamTitle2}
      teamSubTitle={data.teamSubTitle}
      teamMembers={[]}
      ></Page>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPreview
