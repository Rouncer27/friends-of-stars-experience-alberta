import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"
import Wysiwyg from "./Wysiwyg"

const ContentEditorStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }
`

const ContentEditor = ({ data }) => {
  console.log(data)
  return (
    <ContentEditorStyled>
      <div className="wrapper">
        <Wysiwyg content={data.content} />
      </div>
    </ContentEditorStyled>
  )
}

export default ContentEditor
