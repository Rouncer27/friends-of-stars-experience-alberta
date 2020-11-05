import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Dark,
  colors,
  H1White,
  standardWrapper,
  Btn1Light,
} from "../../styles/helpers"

const TicketsCalloutStyled = styled.section`
  background-color: ${colors.colorSecondary};
  padding: 2rem 0;

  .wrapper {
    ${standardWrapper};
  }

  .calloutContent {
    width: 100%;
    text-align: center;

    h2 {
      ${H1White};
    }

    p {
      ${B1White};
      text-align: center;
    }

    a {
      ${Btn1Dark};
    }
  }
`

const CalloutNavStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 4rem;
  background-color: rgba(99, 133, 121, 0.33);
  text-align: center;

  a {
    ${Btn1Light};
  }
`

const TicketsCallout = ({ data }) => {
  return (
    <>
      <TicketsCalloutStyled>
        <div className="wrapper">
          <div className="calloutContent">
            <h2>{data?.ticketPrice}</h2>
            <p>{data?.ticketDate}</p>
            <a target="_blank" rel="noreferrer" href={data?.ticketUrl}>
              Buy your family fun tickets!
            </a>
          </div>
        </div>
      </TicketsCalloutStyled>
      <CalloutNavStyled>
        <Link to="/">Back to all experience</Link>
      </CalloutNavStyled>
    </>
  )
}

export default TicketsCallout
