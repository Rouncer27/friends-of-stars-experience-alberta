import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(2.8, 3.6, 76.8, 150, 3.0)};
  font-family: ${fonts.fontSecondary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
`
export const H1Dark = css`
  ${H1Base};
  color: ${colors.colorTertiary};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

// Headline Styles #2 //
export const H2Base = css``

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2, 3, 76.8, 150, 2.2)}
  font-family: ${fonts.fontSecondary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const H3Dark = css`
  ${H3Base};
  color: ${colors.colorAccent};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2, 2.5, 76.8, 160, 2)};
  font-family: ${fonts.fontSecondary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
`

export const H4Green = css`
  ${H4Base};
  color: ${colors.colorSecondary};
`
