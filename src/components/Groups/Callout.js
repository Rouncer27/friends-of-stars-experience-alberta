import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { B1White, colors, H1White, standardWrapper } from "../../styles/helpers"

const CalloutStyled = styled.section`
  background-color: ${colors.colorSecondary};
  .wrapper {
    ${standardWrapper};
    flex-direction: column-reverse;
    position: relative;

    @media (min-width: 768px) {
      flex-direction: row-reverse;
    }
  }

  .calloutContent {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(85%);
      margin-left: 15%;
      margin-right: auto;
    }
  }

  .calloutIcon {
    width: 20rem;
    height: 20rem;
    margin: 0 auto 2.5rem;

    @media (min-width: 768px) {
      position: absolute;
      left: 0;
      top: -1rem;
      bottom: -1rem;
      width: 22.2rem;
      margin: auto;
    }
  }

  h2 {
    ${H1White};
    text-align: center;
  }

  p {
    ${B1White};
    text-align: center;
  }
`

const Callout = props => {
  const { title, content, icon } = props.data

  console.log(icon)

  return (
    <CalloutStyled>
      <div className="wrapper">
        <div className="calloutContent">
          <div>
            <h2>{title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="calloutIcon">
          <Img
            fluid={icon?.localFile?.childImageSharp?.fluid}
            alt={icon?.altText}
          />
        </div>
      </div>
    </CalloutStyled>
  )
}

export default Callout
