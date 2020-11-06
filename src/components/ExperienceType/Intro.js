import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { Btn1Dark, H1Dark, standardWrapper } from "../../styles/helpers"
import Wysiwyg from "../Groups/Wysiwyg"

const IntroSectionStyled = styled.section`
  .introContainer {
    position: relative;
    @media (min-width: 768px) {
      width: calc(60% - 4rem);
      margin-right: 4rem;
    }
  }

  .introImages {
    @media (min-width: 768px) {
      width: calc(40% - 4rem);
      margin-left: 4rem;
    }
  }

  .wrapper {
    ${standardWrapper};
  }

  .mainLogo {
    width: calc(100%);
    max-width: 35rem;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-left: 0;
  }

  .mainTitle {
    width: calc(100%);

    h2 {
      ${H1Dark};
      text-transform: uppercase;
    }
  }

  .mainLink {
    width: calc(100%);
    margin-bottom: 5rem;

    a {
      ${Btn1Dark};
    }
  }

  .introContent {
    @media (min-width: 768px) {
      width: calc(100%);
    }

    &__header {
      h2 {
        ${H1Dark};
        text-transform: uppercase;
      }
    }
  }
`

const Intro = ({ data }) => {
  return (
    <IntroSectionStyled>
      <div className="wrapper">
        <div className="introContainer">
          <div className="mainLogo">
            <Link to="/">
              <Img
                fluid={data?.mainLogo?.localFile?.childImageSharp?.fluid}
                alt={data?.mainLogo?.altText}
              />
            </Link>
          </div>
          <div className="mainTitle">
            <h2>{data?.mainTitle}</h2>
          </div>
          <div className="mainLink">
            <a rel="noreferrer" target="_blank" href={data?.ticketUrl}>
              Buy Your Tickets
            </a>
          </div>
        </div>
        <div className="introImages">
          <div>
            <Img
              fluid={data?.image?.localFile?.childImageSharp?.fluid}
              alt={data?.image?.altText}
            />
          </div>
        </div>

        <div className="introContent">
          <div className="introContent__header">
            <h2>Experience Alberta - {data?.title}</h2>
          </div>
          <div className="introContent__wysiwyg">
            <Wysiwyg content={data?.content} />
          </div>
        </div>
      </div>
    </IntroSectionStyled>
  )
}

export default Intro
