import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Header from "./Header"
import Footer from "./Footer"

const Layout = props => {
  const children = props.children
  const headerNeeded =
    props.location === "/privacy-policy" || props.location === "/disclaimer"

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {headerNeeded && <Header />}
        <main>{children}</main>
        <Footer location={props.location} />
      </ThemeProvider>
    </>
  )
}

export default Layout
