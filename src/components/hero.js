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
          className="text-white"
          md={{
            size: 6,
            offset: 4
          }}
        >
          <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra, metus in dignissim dictum, nibh tellus euismod urna, luctus sagittis enim nisl et urna.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <div
      className="d-none d-md-block"
    >
      <div
        className="d-flex justify-content-end flex-row mx-5"
        style={{
          position: 'relative',
          top: '83px'
        }}
      >
        <img
          src={Devices}
          alt="Laptop, cell phone and tablet"
        />
      </div>
    </div>
  </Section>
)

export default Hero
