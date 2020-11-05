import React from "react"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { H1Dark, standardWrapper } from "../../styles/helpers"
import Wysiwyg from "./Wysiwyg"

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

const IntroSectionStyled = styled.section`
  background: linear-gradient(
    to top,
    rgba(100, 102, 107, 0.11) 0%,
    rgba(100, 102, 107, 0.11) 70rem,
    #fff 70rem,
    #fff 100%
  );
  .introContainer {
    position: relative;
    @media (min-width: 768px) {
      width: calc(60% - 4rem);
      margin-right: 4rem;
    }
  }

  .introImages {
    @media (min-width: 768px) {
      width: calc(40% - 4rem);
      margin-left: 4rem;
    }
  }

  .wrapper {
    ${standardWrapper};
  }

  .mainLogo {
    @media (min-width: 768px) {
      width: calc(100%);
    }
  }

  .mainTitle {
    @media (min-width: 768px) {
      width: calc(100%);
    }
  }

  .mainContent {
    @media (min-width: 768px) {
      width: calc(100%);
    }
  }
`

const MainTitle = styled.h2`
  ${H1Dark};
`

const IntroSection = props => {
  const siteOptions = useStaticQuery(getData)
  const { mainLogo } = siteOptions
  const { data } = props
  const title = data.introSecTopTitle
  const content = data.introSecMainContent
  const images = data.introSecImages
  const logo = mainLogo?.siteWideSettings?.siteWideSettings?.swsMainSiteLogo

  return (
    <IntroSectionStyled>
      <div className="wrapper">
        <div className="introContainer">
          <div className="mainLogo">
            <Link to="/">
              <Img
                fluid={logo?.localFile?.childImageSharp?.fluid}
                alt={logo?.altText}
              />
            </Link>
          </div>
          <div className="mainTitle">
            <MainTitle>{title}</MainTitle>
          </div>
          <div className="mainContent">
            <Wysiwyg content={content} />
          </div>
        </div>
        <div className="introImages">
          {images.map((img, i) => {
            return (
              <div key={i}>
                <Img
                  fluid={img?.image?.localFile?.childImageSharp?.fluid}
                  alt={img?.image?.altText}
                />
              </div>
            )
          })}
        </div>
      </div>
    </IntroSectionStyled>
  )
}

export default IntroSection
