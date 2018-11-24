import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Section from '../components/section'
import Devices from '../images/editor.svg'

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Section>
      <Container>
        <Row
          className="px-1 py-3 py-md-5"
        >
          <Col
            md={{
              size: 4
            }}
          >
          asdfasdf
          </Col>
          <Col
            md={{
              size: 8
            }}
            className="d-flex justify-content-end flex-column"
          >

            <img
              className="position-up-50 img-fluid align-self-end"
              src={Devices}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
