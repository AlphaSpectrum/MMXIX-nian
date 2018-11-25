import React from 'react'
import { Link } from 'gatsby'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import Logo from '../images/logo.svg'

class NavigationBar extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    return (
      <Navbar
        light
        expand="md"
        className="fixed-top bg-white-transluscent-blur"
      >
        <NavbarBrand
          href="/"
        >
          <img src={Logo} alt="Logo" style={{ height: '40px' }}/>
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggle}
        />
        <Collapse
          isOpen={this.state.isOpen}
          navbar
        >
          <Nav
            className="mx-auto"
            navbar
          >
            <NavItem>
              <Link
                className="nav-link"
                to="/resume"
              >
                Resume
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link"
                to="/projects"
              >
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/AlphaSpectrum"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar
