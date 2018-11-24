import React from 'react'

import Section from '../components/section'

import Devices from '../images/devices.svg'

const Hero = () => (
  <Section
    id="hero"
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
        className="mx-5"
        >
          <h1
          className="mx-5 text-center font-weight-bold"
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </h1>
        </div>
      </div>
    </div>
  </Section>
)

export default Hero
