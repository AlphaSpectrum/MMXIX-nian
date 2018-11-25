import React from 'react'
import { Container, Row, Col } from 'reactstrap'

class Footer extends React.Component {
  render () {
    return (
      <footer
        className="bg-navy text-white"
      >
        <Container>
          <Row>
            <Col
              md={{
                size: 6
              }}
            >
            Side A
            </Col>

            <Col
              md={{
                size: 6
              }}
            >
            Side B
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
