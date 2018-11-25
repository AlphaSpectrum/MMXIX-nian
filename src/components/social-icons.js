import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

const SocialIcons = () => (
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
)

export default SocialIcons
