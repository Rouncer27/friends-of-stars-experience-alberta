import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  B1DarkBlue,
  B3Dark,
  colors,
  H3Dark,
  H4Green,
  medWrapper,
} from "../../styles/helpers"

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
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(20% - 4rem);
      margin-right: 4rem;
    }

    &__image {
      width: calc(50% - 2rem);
      margin: 1rem;

      @media (min-width: 768px) {
        width: calc(100%);
        margin-bottom: 1rem;
      }
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
      font-weight: bold;
      text-decoration: underline;

      &:hover {
        color: ${colors.colorPrimary};
      }
    }

    &__value {
      p {
        ${B3Dark};
        margin: 0;
        text-transform: uppercase;

        @media (max-width: 767px) {
          margin-bottom: 0;
          font-size: 2rem;
          text-align: center;
        }
      }
    }
  }

  .packSponsors {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;

    @media (min-width: 768px) {
      width: calc(100%);
      margin-top: 5rem;
    }

    &__title {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(20% - 4rem);
        margin-right: 4rem;
      }

      h3 {
        ${H4Green};

        @media (max-width: 767px) {
          margin-bottom: 0;
          font-size: 3.4rem;
          text-align: center;
        }
      }
    }

    &__logos {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;

      @media (min-width: 768px) {
        width: calc(80%);
      }
    }
  }
`

const LogoStyled = styled.div`
  align-self: center;
  width: calc(33.33% - 2rem);
  margin: 2rem 1rem;

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
                  <div className="packContent__value">
                    <p>All Valued At ${pack?.value}</p>
                  </div>
                </div>
                <div className="packSponsors">
                  <div className="packSponsors__title">
                    <h3>Sponsored by</h3>
                  </div>
                  <div className="packSponsors__logos">
                    {pack?.sponsors?.map((spon, index) => {
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
