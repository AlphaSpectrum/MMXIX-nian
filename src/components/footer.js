import React from 'react'
import { Link } from 'gatsby'
import SignupForm from './signup-form'
import SocialIcons from './social-icons'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class Footer extends React.Component {
  render () {
    return (
      <footer
        className="bg-navy text-white"
      >
        <Container>
          <Row
            className="py-5"
          >
            <Col
              md={{
                size: 6
              }}
            >
              <ul
                className="list-unstyled"
              >
                <li>
                  <Link
                    to="/about"
                  >
                  About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Col>
            <Col
              md={{
                size: 6
              }}
              className="text-center"
            >
              <SocialIcons/>
              <SignupForm/>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
