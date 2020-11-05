import { colors } from "./index"
import { fonts, fontSizer } from "./index"
import { css } from "styled-components"

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.6, 2, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
`

export const B1DarkBlue = css`
  ${B1Base};
  color: ${colors.colorTertiary};
`

export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`

export const B2Dark = css`
  ${B2Base};
  color: ${colors.colorTertiary};
`

// Body copy THREE //
export const B3Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`

export const B3Dark = css`
  ${B3Base};
  color: ${colors.colorTertiary};
`
