import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import ContactUsImage from "../assets/svg/undraw_contact_us_15o2.svg"
import LandingPageImage from "../components/landing-image"

const CompanyName = styled.h2``
const CompanyAddress = styled.div``

const ContactItemTitle = styled.a`
  font-weight: 300;
`

export const CompanyProfile = props => {
  const sideMetadata = useStaticQuery(graphql`
    query CompanyProfileQuery {
      site {
        siteMetadata {
          title
          author
          companyName
          address
          contactEmail
        }
      }
    }
  `)

  let {
    title,
    companyName,
    address,
    contactEmail,
  } = sideMetadata.site.siteMetadata

  return (
    <Container className="py-5">
      <Row className="text-center mb-4">
        <LandingPageImage src={ContactUsImage} />
      </Row>

      <Row>
        <Col>
          <CompanyName className="text-center mb-1">{companyName}</CompanyName>
        </Col>
      </Row>

      {address.split(",").map(addressRow => (
        <Row>
          <Col>
            <CompanyAddress className="text-center">
              {addressRow}
            </CompanyAddress>
          </Col>
        </Row>
      ))}

      <Row className="text-center mt-1">
        <Col>
          <ContactItemTitle href={`mailto:${contactEmail}`}>
            {contactEmail}
          </ContactItemTitle>
        </Col>
      </Row>
    </Container>
  )
}

export default CompanyProfile
