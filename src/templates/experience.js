import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Intro from "../components/ExperienceType/Intro"
import AllPackages from "../components/ExperienceType/AllPackages"
import TicketsCallout from "../components/ExperienceType/TicketsCallout"

const Experience = props => {
  const { experience, mainLogo } = props.data
  const introData = {}
  introData.mainLogo =
    mainLogo?.siteWideSettings?.siteWideSettings?.swsMainSiteLogo
  introData.mainTitle = experience?.experienceFields?.expInsideMainTitle
  introData.title = experience.title
  introData.ticketUrl = experience?.experienceFields?.expInsideBuyYourTicketUrl
  introData.content = experience?.experienceFields?.expInsideIntroContent
  introData.image = experience?.experienceFields?.expInsideMainImage

  const packages = experience?.experienceFields?.expInsideExperiences

  const calloutData = {}
  calloutData.title = experience.title
  calloutData.ticketUrl =
    experience?.experienceFields?.expInsideBuyYourTicketUrl
  calloutData.ticketPrice =
    experience?.experienceFields?.expInsideTicketsPriceText
  calloutData.ticketDate = experience?.experienceFields?.expInsideDrawDateText

  return (
    <Layout location={props?.location?.pathname}>
      <SEO title="Page Template" />
      <Intro data={introData} />
      <AllPackages packages={packages} />
      <TicketsCallout data={calloutData} />
    </Layout>
  )
}

export const experienceQuery = graphql`
  query experiencePage($id: String!) {
    experience: wpExperienceTheme(id: { eq: $id }) {
      title
      experienceFields {
        expInsideIntroContent
        expInsideMainImage {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        expInsideMainTitle
        expInsideExperiences {
          title
          content
          value
          images {
            image {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          sponsors {
            linkRequired
            url
            logo {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }

        expInsideBuyYourTicketUrl
        expInsideTicketsPriceText
        expInsideDrawDateText
      }
    }

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

export default Experience
