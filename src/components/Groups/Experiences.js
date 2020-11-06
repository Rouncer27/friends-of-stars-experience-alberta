import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { B1DarkBlue, H1Dark, medWrapper, Btn1Dark } from "../../styles/helpers"

const getData = graphql`
  {
    experiences: allWpExperienceTheme {
      edges {
        node {
          title
          slug
          experienceFields {
            expFrontExcerpt
            expFrontImage {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const ExperiencesStyled = styled.section``

const ExperienceCard = styled.div`
  margin-bottom: 5rem;
  background-color: ${props => (props.reversed ? "#fff" : "#e6e6e6")};

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  .cardWrapper {
    ${medWrapper};
  }

  .cardInner {
    display: flex;
    align-items: flex-start;
    flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }

  .cardContent {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(65% - 4rem);
      margin-right: ${props => (props.reversed ? "0" : "4rem")};
      margin-left: ${props => (props.reversed ? "4rem" : "0")};
    }

    h2 {
      ${H1Dark};
      margin-top: 0;
      text-transform: uppercase;
    }

    p {
      ${B1DarkBlue};
    }

    a {
      ${Btn1Dark};
    }

    .cardLink {
      margin-bottom: 5rem;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }
    }
  }

  .cardImg {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(35%);
    }
  }
`

const Experiences = () => {
  const data = useStaticQuery(getData)
  const experArray = data.experiences?.edges?.reverse()

  return (
    <ExperiencesStyled>
      <div className="wrapper">
        {experArray?.map((experience, index) => {
          const reversed = index % 2 === 0
          const title = experience?.node?.title
          const slug = experience?.node?.slug
          const excerpt = experience?.node?.experienceFields?.expFrontExcerpt
          const imgFluid =
            experience?.node?.experienceFields?.expFrontImage?.localFile
              ?.childImageSharp?.fluid
          const imgAlt =
            experience?.node?.experienceFields?.expFrontImage?.altText
          return (
            <ExperienceCard key={index} reversed={reversed}>
              <div className="cardWrapper">
                <div className="cardInner">
                  <div className="cardContent">
                    <div>
                      <h2>Experience Alberta - {title}</h2>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                    <div className="cardLink">
                      <Link to={`/experience/${slug}`}>
                        See what you can win
                      </Link>
                    </div>
                  </div>
                  <div className="cardImg">
                    <Img fluid={imgFluid} alt={imgAlt} />
                  </div>
                </div>
              </div>
            </ExperienceCard>
          )
        })}
      </div>
    </ExperiencesStyled>
  )
}

export default Experiences
