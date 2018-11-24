import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Section from '../components/section'

import Devices from '../images/devices.svg'

const Hero = () => (
  <Section
    id="hero"
  >
    <Container
      fluid={true}
    >
      <Row>
        <Col
          className="text-center mx-auto"
          md={{
            size: 8,
            offset: 4
          }}
        >
          <div
            className="d-none d-md-block"
          >
            <div
              className=""
              style={{
                position: 'relative',
                top: '113px'
              }}
            >
              <img
                src={Devices}
                alt="Laptop, cell phone and tablet"
              />
            </div>
          </div>
        </Col>
        <Col
          className="text-white mx-auto"
          md={{
            size: 5,
            offset: 7
          }}
        >
          <div
            className="pt-5"
          >
            <p
              className="text-uppercase"
            >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra, metus in dignissim dictum, nibh tellus euismod urna, luctus sagittis enim nisl et urna.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default Hero
