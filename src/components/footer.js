import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import Link from './link';

let SocialLink = ({Icon}) => (
  <Link to="/" className="mr-2">
    <Icon size={30}/>
  </Link>
)

let FooterLink = ({to, children}) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

export default () => (
  <footer className="py-5 bg-light">
    <Container>
      <Row>
        {/*<Col>*/}
        {/*  <h5>Features</h5>*/}
        {/*  <ul>*/}
        {/*    <FooterLink to="/">Item</FooterLink>*/}
        {/*  </ul>*/}
        {/*</Col>*/}
        {/*<Col>*/}
        {/*  <h5>Resources</h5>*/}
        {/*  <ul>*/}
        {/*    <FooterLink to="/">Item</FooterLink>*/}
        {/*  </ul>*/}
        {/*</Col>*/}
        {/*<Col>*/}
        {/*  <h5>Company</h5>*/}
        {/*  <ul>*/}
        {/*    <FooterLink to="/">Item</FooterLink>*/}
        {/*  </ul>*/}
        {/*</Col>*/}
        {/*<Col>*/}
        {/*  <h5>Contact Us</h5>*/}
        {/*  <SocialLink Icon={FaFacebookSquare}/>*/}
        {/*  <SocialLink Icon={FaInstagram}/>*/}
        {/*</Col>*/}
      </Row>
    </Container>
  </footer>
)
