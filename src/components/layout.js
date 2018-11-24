import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Schema from 'rschema'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header'
import './layout.css'
import Logo from '../images/logo.svg'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            keywords
            description
            siteURL
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: `${ data.site.siteMetadata.description }`
            },
            {
              name: 'keywords',
              content: `${ data.site.siteMetadata.keywords }`
            },
          ]}
          link={[
            {
              name: 'link',
              href: 'https://fonts.googleapis.com/css?family=Work+Sans:400,500,700',
              rel: 'stylesheet'
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Schema
          schemaType="CreativeWork"
          data={{
            '@id': `${ data.site.siteMetadata.siteURL }/#creativework`,
            creator:
            {
              '@id': `${ data.site.siteMetadata.siteURL }/#person`
            },
          }}
        />
        <Schema
          schemaType="Person"
          data={{
            '@id': `${ data.site.siteMetadata.siteURL }/#person`,
            name: 'Alan Campos',
            alternateName: [
              '孔旭东',
              'kong xu dong'
            ],
            sameAs: [
              'https://www.linkedin.com/in/alancampos/',
            ],
            jobTitle: [
              'Software Engineer',
              'Web Developer'
            ]
          }}
        />
        <Schema
          schemaType="Organization"
          data={{
            '@id': `${ data.site.siteMetadata.siteURL }/#website`,
            url: `${ data.site.siteMetadata.siteURL }`,
            logo: `${ data.site.siteMetadata.siteURL }/${ Logo }`,
          }}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
