import React from 'react'

import Section from '../components/section'

const Hero = () => (
  <Section
    id="hero"
    style={{
      marginTop: '56px'
    }}
  >
    <div
      id='hero-device'
      className="d-flex justify-content-center flex-column"
      style={{
        height: '480px'
      }}
    >
      <div
        className="align-self-center mx-5"
      >
        <div
          style={{
            maxWidth: '600px'
          }}
        >
          <h1
            className="text-center font-weight-bold"
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
        </div>
      </div>
    </div>
  </Section>
)

export default Hero
