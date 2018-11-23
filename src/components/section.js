import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ id, children }) => (
  <div
    id={id}
    role="section"
  >
    {children}
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}

Section.defaultProps = {
  id: '',
}

export default Section
