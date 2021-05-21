import React from "react"
import  Page  from "../../shared/navbarTemplate"

const IndexPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
   
    return (
      <Page
      linkName1={data.linkName1}
      linkName2={data.linkName2}
      linkName3={data.linkName3}
      linkName4={data.linkName4}
      ButtonName={data.ButtonName}
      ButtonUrl={data.ButtonUrl}
      ></Page>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPreview
