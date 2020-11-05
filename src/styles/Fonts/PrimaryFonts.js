import * as primary from "./primary"
import { css } from "styled-components"

const PrimaryFonts = css`
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url("${primary.WOFF2_4}") format("woff2"),
      url("${primary.WOFF_4}") format("woff");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 400;
    src: local("Open Sans Italic"), local("OpenSans-Italic"),
      url("${primary.WOFF2_4I}") format("woff2"),
      url("${primary.WOFF_4I}") format("woff");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url("${primary.WOFF2_7}") format("woff2"),
      url("${primary.WOFF_7}") format("woff");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 700;
    src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"),
      url("${primary.WOFF2_7I}") format("woff2"),
      url("${primary.WOFF_7I}") format("woff");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    src: local("Open Sans ExtraBold"), local("OpenSans-ExtraBold"),
      url("${primary.WOFF2_8}") format("woff2"),
      url("${primary.WOFF_8}") format("woff");
  }

  @font-face {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 800;
    src: local("Open Sans ExtraBold Italic"), local("OpenSans-ExtraBoldItalic"),
      url("${primary.WOFF2_8I}") format("woff2"),
      url("${primary.WOFF_8I}") format("woff");
  }
`

export default PrimaryFonts
