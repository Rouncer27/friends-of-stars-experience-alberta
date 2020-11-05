import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
