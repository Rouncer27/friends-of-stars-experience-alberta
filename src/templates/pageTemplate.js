import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import ComponentGroups from "../components/ComponentGroups"

const PageTemplate = props => {
  const { components } = props.data
  return (
    <Layout>
      <SEO title="Page Template" />
      <ComponentGroups components={components} />
    </Layout>
  )
}

export const pageTempQuery = graphql`
  query pageTempPage($id: String!) {
    components: wpPage(id: { eq: $id }) {
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
        }
      }
    }
  }
`

export default PageTemplate
