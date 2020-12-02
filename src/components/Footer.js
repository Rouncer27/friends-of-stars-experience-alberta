import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import BgImage from "gatsby-background-image"
import styled from "styled-components"
import {
  B1White,
  colors,
  fonts,
  H1White,
  standardWrapper,
} from "../styles/helpers"

const FooterStyled = styled.footer`
  position: relative;
  padding: 5rem 0;

  .wrapper {
    ${standardWrapper};
    position: relative;
    z-index: 10;
  }

  .footerContent {
    width: 100%;

    h3 {
      ${H1White};
      margin: 0;
      text-align: center;
      text-transform: uppercase;
    }

    &__mainContent {
      width: 100%;
      text-align: center;

      p,
      a {
        ${B1White};
        text-align: center;
      }
    }

    &__social {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 5rem auto;
      text-align: center;

      &--title {
        width: calc(60% - 2rem);
        margin-right: 2rem;

        @media (min-width: 768px) {
          width: calc(50% - 4rem);
        }

        p {
          ${B1White};
          margin: 0;
          text-align: right;
        }
      }

      &--icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: calc(40%);

        @media (min-width: 768px) {
          width: calc(50%);
        }

        .socialIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 5rem;
          height: 5rem;
          margin-top: 1rem;
          margin-right: 1rem;
          margin-bottom: 1rem;
          margin-left: 1rem;
          border-radius: 50%;
          overflow: hidden;

          @media (min-width: 768px) {
            width: 6rem;
            height: 6rem;
            margin-top: auto;
            margin-bottom: auto;
          }

          &:hover {
            background-color: ${colors.colorSecondary};
          }

          &__inner {
            align-self: center;
            position: relative;
            width: 100%;
            height: 5rem;

            &::after {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 2.5rem;
              color: ${colors.white};
              text-align: center;
              font-family: ${fonts.fontAwesome};
              content: "";
            }

            @media (min-width: 768px) {
              height: 6rem;
              &::after {
                font-size: 3rem;
              }
            }
          }

          &__facebook {
            background-color: #3b5998;
            .socialIcon__inner {
              &::after {
                content: "\f09a";
              }
            }
          }

          &__instagram {
            background-color: #3f729b;
            .socialIcon__inner {
              &::after {
                content: "\f16d";
              }
            }
          }

          &__linkedin {
            background-color: #0e76a8;
            .socialIcon__inner {
              &::after {
                content: "\f0e1";
              }
            }
          }
        }
      }
    }

    &__copy {
      width: 100%;
      text-align: center;

      p,
      a {
        ${B1White};
        text-align: center;
      }
    }

    &__navigation {
      width: 100%;
      margin-top: 5rem;

      a,
      span {
        ${B1White};
        text-align: center;
      }
    }
  }

  .backgroundOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2b2e34;
    opacity: 0.5;
    z-index: 1;
  }

  .backgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    div {
      width: 100%;
      height: 100%;
    }
  }
`

const getData = graphql`
  {
    options: wp {
      siteWideSettings {
        siteWideSettings {
          swbFootContent
          swbFootTitle
          swbFootBgImage {
            altText
            localFile {
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          swbSocialLinks {
            type
            url
          }
        }
      }
    }
  }
`

const Footer = props => {
  const siteOptions = useStaticQuery(getData)
  const title =
    siteOptions?.options?.siteWideSettings?.siteWideSettings?.swbFootTitle
  const content =
    siteOptions?.options?.siteWideSettings?.siteWideSettings?.swbFootContent

  const bgImgFluid =
    siteOptions?.options?.siteWideSettings?.siteWideSettings?.swbFootBgImage
      ?.localFile?.childImageSharp?.fluid

  const socialLinks =
    siteOptions?.options?.siteWideSettings?.siteWideSettings?.swbSocialLinks
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="footerContent">
          <div className="footerContent__mainTitle">
            <h3>{title}</h3>
          </div>
          <div
            className="footerContent__mainContent"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <div className="footerContent__social">
            <div className="footerContent__social--title">
              <p>Follow & Share</p>
              <p>#experiencealbertawithSTARS</p>
            </div>
            <div className="footerContent__social--icons">
              {socialLinks.map((social, index) => {
                return (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={social.url}
                    key={index}
                    className={`socialIcon socialIcon__${social.type}`}
                  >
                    <div className={`socialIcon__inner`} />
                  </a>
                )
              })}
            </div>
            <div className="footerContent__navigation">
              {props.location !== "/" && (
                <>
                  <Link to="/">Home</Link>
                  <span>{" | "}</span>
                </>
              )}
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>{" | "}</span>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
          <div className="footerContent__copy">
            <p>
              Website built and donated by{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://switchbackcreative.ca/"
              >
                Switchback Creative
              </a>{" "}
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </p>
          </div>
        </div>
      </div>
      <div className="backgroundImage">
        <BgImage tag="div" fluid={bgImgFluid} />
      </div>
      <div className="backgroundOverlay" />
    </FooterStyled>
  )
}

export default Footer
