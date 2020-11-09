import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { H4Green, medWrapper } from "../../styles/helpers"

const SponsorsStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }
`

const SponsorLevel = styled.div`
  width: 100%;
  margin-bottom: 5rem;

  .levelTitle {
    width: 100%;
    text-align: center;

    h2 {
      ${H4Green};
    }
  }

  .levelLogos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const LogoStyled = styled.div`
  align-self: center;
  width: calc(50% - 6rem);
  margin: 2rem 3rem;

  @media (min-width: 768px) {
    width: calc(20% - 4rem);
    margin: 2rem;
  }

  @media (min-width: 1025px) {
    width: calc(12.5% - 2rem);
    margin: 2rem 1rem;
  }
`

const Sponsors = ({ data }) => {
  return (
    <SponsorsStyled>
      <div className="wrapper">
        {data?.sponsorLevel?.map((level, index) => {
          return (
            <SponsorLevel key={index}>
              <div className="levelTitle">
                <h2>{level?.levelTitle}</h2>
              </div>
              <div className="levelLogos">
                {level?.levelLogo?.map((logo, index) => {
                  const displayLogo = logo?.linkOption ? (
                    <a target="_blank" rel="noreferrer" href={logo?.linkUrl}>
                      <Img
                        fluid={logo?.logo?.localFile?.childImageSharp?.fluid}
                        alt={logo?.logo?.altText}
                      />
                    </a>
                  ) : (
                    <div>
                      <Img
                        fluid={logo?.logo?.localFile?.childImageSharp?.fluid}
                        alt={logo?.logo?.altText}
                      />
                    </div>
                  )

                  return <LogoStyled key={index}>{displayLogo}</LogoStyled>
                })}
              </div>
            </SponsorLevel>
          )
        })}
      </div>
    </SponsorsStyled>
  )
}

export default Sponsors
