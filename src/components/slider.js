import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { theme } from "../theme"
import LandingPageImage from "../components/landing-image"
import BuildWithUsImage from "../assets/svg/undraw_work_together_h63l.svg"

const SliderContainer = styled.div`
  background: linear-gradient(
    210deg,
    ${theme.colors.sliderPurple} 0%,
    ${theme.colors.sliderPink} 40.13%,
    ${theme.colors.sliderOrange} 90%
  );
  color: ${theme.colors.white};
  padding-top: 5rem;
  padding-bottom: 7rem;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  max-height: 80vh;
`

const SliderContent = styled.div``

export default () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const sideMetadata = useStaticQuery(graphql`
    query TitleQuery {
      site {
        siteMetadata {
          companyName
        }
      }
    }
  `)

  let { companyName } = sideMetadata.site.siteMetadata
  return (
    <SliderContainer>
      <Slider {...settings}>
        <SliderContent className={"slider-content"}>
          <div className="text-center">
            <LandingPageImage src={BuildWithUsImage} className="pb-3"/>
            <h1>{companyName}</h1>
            <p>Software built for people</p>
          </div>
        </SliderContent>
      </Slider>
    </SliderContainer>
  )
}
