import React from "react"
import styled from "styled-components"
import { B1White, colors, H1White, standardWrapper } from "../../styles/helpers"

const CalloutStyled = styled.section`
  background-color: ${colors.colorSecondary};
  .wrapper {
    ${standardWrapper};
  }

  h2 {
    ${H1White};
  }

  p {
    ${B1White};
    text-align: center;
  }
`

const Callout = props => {
  const { title, content, icon } = props.data

  return (
    <CalloutStyled>
      <div className="wrapper">
        <div>
          <h2>{title}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </CalloutStyled>
  )
}

export default Callout
