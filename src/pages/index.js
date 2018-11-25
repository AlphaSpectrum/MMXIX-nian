import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Section from '../components/section'
import Devices from '../images/editor.svg'

const IndexPage = () => (
  <Layout>
    <Hero />
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
            <h2>
              Lorem ipsum dolor sit amet
            </h2>
            <p>
              Praesent nec viverra tortor. Nullam finibus mauris ut ligula suscipit, sit amet volutpat lectus ultrices. Suspendisse sagittis turpis at nibh aliquet semper.
            </p>
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
    <Container>
      <Row>
        <Col
          md={{ size: 12 }}
          className="py-5"
        >
          <CardColumns>
            <Card
              inverse
            >
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  Card title
                </CardTitle>
                <CardSubtitle>
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Lorem Ipsum
                </CardText>
              </CardBody>
            </Card>
          </CardColumns>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
