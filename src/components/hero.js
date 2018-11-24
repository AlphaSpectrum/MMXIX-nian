import React from 'react'

import Section from '../components/section'

import Devices from '../images/devices.svg'

const Hero = () => (
  <Section
    id="hero"
  >
    <div
      className="hero-container d-none d-md-block"
    >
      <div
      >
        <img
          src={Devices}
          alt="Laptop, cell phone, tablet"
          className="img-fluid"
        />
      </div>
      <div
        className="centered"
      >
        <p
          className="display-4 font-weight-bold"
          
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div
      className="d-flex justify-content-center flex-column d-md-none"
      style={{
        height: '480px',
      }}
    >
      <div
        className="align-self-center"
      >
        <p
          className="display-4 font-weight-bold"
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </Section>
)

export default Hero
