import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

const Btn1Base = css`
  ${fontSizer(1.4, 1.6, 76.8, 150, 1.6)};
  display: inline-block;
  padding: 1.75rem 4rem;
  transition: all 0.3s ease;
  border-radius: 0.9rem;
  box-shadow: 1px 3px 6px 0 rgba(0, 0, 0, 0.16);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.11;
  letter-spacing: normal;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Btn1Dark = css`
  ${Btn1Base};
  border-color: ${colors.colorAccent};
  background: ${colors.colorAccent};
  color: ${colors.white};

  &:hover {
    background: ${colors.colorSecondary};
  }
`

export const Btn1Light = css`
  ${Btn1Base};
  border: solid 0.1rem ${colors.colorSecondary};
  background: transparent;
  color: ${colors.colorSecondary};

  &:hover {
    background: ${colors.colorSecondary};
    color: ${colors.white};
  }
`
