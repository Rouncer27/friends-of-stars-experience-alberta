import React from "react"

import IntroSection from "./Groups/IntroSection"
import Callout from "./Groups/Callout"
import Experiences from "./Groups/Experiences"
import Sponsors from "./Groups/Sponsors"
import ContentEditor from "./Groups/ContentEditor"

const ComponentGroups = props => {
  const { components } = props
  const allPageComponents =
    components?.acfPageComponents?.pageComponents?.length > 0 ? (
      <>
        {components?.acfPageComponents?.pageComponents.map(
          (component, index) => {
            switch (component?.fieldGroupName) {
              case "page_Acfpagecomponents_PageComponents_IntroSection":
                return <IntroSection key={index} data={component} />
              case "page_Acfpagecomponents_PageComponents_CalloutSection":
                return <Callout key={index} data={component} />
              case "page_Acfpagecomponents_PageComponents_Sponsors":
                return <Sponsors key={index} data={component} />
              case "page_Acfpagecomponents_PageComponents_Experiences":
                return <Experiences key={index} />
              case "page_Acfpagecomponents_PageComponents_ContentEditor":
                return <ContentEditor key={index} data={component} />
              default:
                return (
                  <p>Cannot find this component {component.fieldGroupName}</p>
                )
            }
          }
        )}
      </>
    ) : (
      <p>This page has no content</p>
    )

  return <>{allPageComponents}</>
}

export default ComponentGroups
