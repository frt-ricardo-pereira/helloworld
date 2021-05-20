import React from "react"
import Navbar from "./navbar"

const Layout = ({ children }) => {

    return(
      
      <div>
        <Navbar></Navbar>
        <p>{children}</p>
      </div>
    )
  
  }

export default Layout