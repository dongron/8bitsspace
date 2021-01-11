import React from "react"

import { Container, Row, Col } from "reactstrap"
import Link from "../components/link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"
import Box from "../components/box"
import { FaLinkedin, FaHome, FaWordpressSimple } from "react-icons/fa"
import { AiOutlineMobile } from "react-icons/ai"
import CompanyProfile from "../components/company-profile"

let Service = ({ title, Icon = FaHome }) => (
  <Col>
    <Box>
      <Icon size={30} />
      <h4 className="mt-3">{title}</h4>
    </Box>
  </Col>
)

export default () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Container className="py-5">
      <h2 className="text-center mb-4">Services</h2>
      <Row>
        <Service title="Custom CMS Frontend" Icon={FaWordpressSimple} />
        {/*<Service title="Consulting" Icon={FaChalkboardTeacher} />*/}
        <Service title="Mobile Web Apps" Icon={AiOutlineMobile} />
      </Row>
    </Container>

    <CompanyProfile />

    {/*<div className="text-center py-5">*/}
    {/*  <Link*/}
    {/*    to="https://www.linkedin.com/company/8-bits-space/"*/}
    {/*    className="btn btn-primary btn-lg"*/}
    {/*  >*/}
    {/*    <FaLinkedin className="mr-1" />*/}
    {/*    View on LinkedIn*/}
    {/*  </Link>*/}
    {/*</div>*/}
  </Layout>
)
