import { colors } from "./index"
import { fonts, fontSizer } from "./index"

export const Nav1Base = `
  ${fontSizer(1.4, 1.4, 76.8, 150, 1.6)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.colorSecondary};
  }
`

export const Nav1DarkGrey = `
  ${Nav1Base};
  color: ${colors.greyBrown};
`

export const Nav1LimeGreen = `
  ${Nav1Base};
  color: ${colors.colorPrimary};
`

export const Nav1White = `
  ${Nav1Base};
  color: ${colors.greyBrown};
`
