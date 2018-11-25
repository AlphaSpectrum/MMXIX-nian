import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignupForm from './signup-form'
import {
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
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
            </Col>
            <Col
              md={{
                size: 6
              }}
            >
              <StaticQuery
                query={graphql`
                  query SocialMediaLinksQuery {
                    site {
                      siteMetadata {
                        twitterURL
                        linkedInURL
                        gitHubURL
                      }
                    }
                  }
                `}
                render={data => (
                  <ul
                    className="list-inline social"
                  >
                    <li
                      className="list-inline-item"
                    >
                      <a
                        href={data.site.siteMetadata.twitterURL}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li
                      className="list-inline-item"
                    >
                      <a
                        href={data.site.siteMetadata.gitHubURL}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li
                      className="list-inline-item"
                    >
                      <a
                        href={data.site.siteMetadata.linkedInURL}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                  </ul>
                )}
              />
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
