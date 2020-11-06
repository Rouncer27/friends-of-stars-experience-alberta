import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    mainLogo: wp {
      siteWideSettings {
        siteWideSettings {
          swsMainSiteLogo {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

const HeaderStyled = styled.header`
  .mainLogo {
    margin: 2rem auto;
    padding: 2rem;
    max-width: 35rem;
  }
`

const Header = ({ siteTitle }) => {
  const siteOptions = useStaticQuery(getData)
  const { mainLogo } = siteOptions
  const logo = mainLogo?.siteWideSettings?.siteWideSettings?.swsMainSiteLogo
  return (
    <HeaderStyled>
      <div className="mainLogo">
        <Link to="/">
          <Img
            fluid={logo?.localFile?.childImageSharp?.fluid}
            alt={logo?.altText}
          />
        </Link>
      </div>
    </HeaderStyled>
  )
}
export default Header
