import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ id, style, children }) => (
  <div
    id={id}
    role="section"
    style={style}
  >
    {children}
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  style: PropTypes.object,
}

Section.defaultProps = {
  id: '',
}

export default Section
