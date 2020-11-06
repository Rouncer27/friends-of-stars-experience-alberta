import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import ComponentGroups from "../components/ComponentGroups"

const IndexPage = props => {
  const { components } = props.data
  return (
    <Layout location={props?.location?.pathname}>
      <SEO title="Home" />
      <ComponentGroups components={components} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    components: wpPage(slug: { eq: "home" }) {
      acfPageComponents {
        pageComponents {
          ... on WpPage_Acfpagecomponents_PageComponents_IntroSection {
            fieldGroupName
            introSecMainContent
            introSecTopTitle
            introSecImages {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                altText
              }
            }
          }

          ... on WpPage_Acfpagecomponents_PageComponents_CalloutSection {
            content
            fieldGroupName
            title
            icon {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              altText
            }
          }

          ... on WpPage_Acfpagecomponents_PageComponents_Sponsors {
            fieldGroupName
            mainSectionTitle
            sponsorLevel {
              fieldGroupName
              levelLogo {
                linkUrl
                linkOption
                fieldGroupName
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
              levelTitle
            }
          }

          ... on WpPage_Acfpagecomponents_PageComponents_Experiences {
            fieldGroupName
            showExperienceList
          }
          ... on WpPage_Acfpagecomponents_PageComponents_ContentEditor {
            fieldGroupName
            content
          }
        }
      }
    }
  }
`
export default IndexPage
