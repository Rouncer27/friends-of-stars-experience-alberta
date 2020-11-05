import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { B1DarkBlue, H3Dark, H4Green, medWrapper } from "../../styles/helpers"

const AllPackagesStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }
`

const PackageStyled = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  padding: 4rem 0;
  background-color: ${props =>
    props.reversed ? "rgba(230, 230, 230, 0.51)" : "rgba(255, 255, 255, 1)"};
  width: 100%;

  .packImages {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(20% - 4rem);
      margin-right: 4rem;
    }

    &__image {
      margin-bottom: 1rem;
    }
  }

  .packContent {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(80%);
    }

    h2 {
      ${H3Dark};
      text-transform: uppercase;
    }

    p {
      ${B1DarkBlue};
    }

    a {
      ${B1DarkBlue};
    }
  }

  .packSponsors {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 5rem;

    @media (min-width: 768px) {
      width: calc(100%);
    }

    &__title {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(20% - 4rem);
        margin-right: 4rem;
      }

      h3 {
        ${H4Green};
      }
    }

    &__logos {
      width: 100%;

      @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: calc(80%);
      }
    }
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

const AllPackages = ({ packages }) => {
  return (
    <AllPackagesStyled>
      {packages?.length > 0 ? (
        packages.map((pack, index) => {
          const reversed = index % 2 === 0
          return (
            <PackageStyled key={index} reversed={reversed}>
              <div className="wrapper">
                <div className="packImages">
                  {pack?.images?.map((img, i) => (
                    <div key={i} className="packImages__image">
                      <Img
                        fluid={img?.image?.localFile?.childImageSharp?.fluid}
                        alt={img?.image?.altText}
                      />
                    </div>
                  ))}
                </div>
                <div className="packContent">
                  <div className="packContent__title">
                    <h2>{pack?.title}</h2>
                  </div>
                  <div
                    className="packContent__content"
                    dangerouslySetInnerHTML={{ __html: pack?.content }}
                  />
                </div>
                <div className="packSponsors">
                  <div className="packSponsors__title">
                    <h3>Sponsored by</h3>
                  </div>
                  <div className="packSponsors__logos">
                    {pack?.sponsors?.map((spon, index) => {
                      console.log(spon)
                      const displayLogo = spon?.linkRequired ? (
                        <a target="_blank" rel="noreferrer" href={spon?.url}>
                          <Img
                            fluid={
                              spon?.logo?.localFile?.childImageSharp?.fluid
                            }
                            alt={spon?.logo?.altText}
                          />
                        </a>
                      ) : (
                        <div>
                          <Img
                            fluid={
                              spon?.logo?.localFile?.childImageSharp?.fluid
                            }
                            alt={spon?.logo?.altText}
                          />
                        </div>
                      )

                      return <LogoStyled key={index}>{displayLogo}</LogoStyled>
                    })}
                  </div>
                </div>
              </div>
            </PackageStyled>
          )
        })
      ) : (
        <div className="wrapper">
          <div>
            <p>Sorry there are no packages!</p>
          </div>
        </div>
      )}
    </AllPackagesStyled>
  )
}

export default AllPackages
