import React from "react"

import { Container, Row, Col } from "reactstrap"
import Link from "../components/link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"
import Box from "../components/box"
import { FaLinkedin, FaHome, FaWordpressSimple, FaChalkboardTeacher } from "react-icons/fa"
import { AiOutlineMobile } from "react-icons/ai"

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
        <Service title="CMS Frontend" Icon={FaWordpressSimple} />
        <Service title="Mobile Web Apps" Icon={AiOutlineMobile} />
        <Service title="Consulting" Icon={FaChalkboardTeacher} />
      </Row>
    </Container>
    <div className="text-center py-5">
      <Link
        to="https://www.linkedin.com/in/dominik-gronkiewicz-b696b950/"
        className="btn btn-primary btn-lg"
      >
        <FaLinkedin className="mr-1" />
        View on LinkedIn
      </Link>
    </div>
  </Layout>
)
