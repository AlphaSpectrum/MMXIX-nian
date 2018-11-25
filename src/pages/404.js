import React from 'react'
import Layout from '../components/layout'
import NotFound from '../images/404.svg'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

class NotFoundPage extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this)
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this)
  }

  handleOnMouseOver (e) {
    e.target.classList.add('animated', 'rubberBand')
  }

  handleOnMouseOut (e) {
    e.target.classList.remove('animated', 'rubberBand')
  }

  render () {
    return (
      <Layout>
        <div
          id="not-found"
          className="d-flex justify-content-center flex-column p-3"

          style={{
            height: '100vh'
          }}
        >
          <div
            className="text-white align-self-center text-center"
          >
            <img
              onMouseOver={this.handleOnMouseOver}
              onMouseOut={this.handleOnMouseOut}
              src={NotFound}
              alt='404 not found'
              className="img-fluid"
              style={{
                maxHeight: '200px'
              }}
            />
            <h1>
           NOT FOUND
            </h1>
            <p>You have found a ghost page!</p>
            <Link
              style={{
                color: '#00dcff'
              }}
              to="/"
            >
              Run away to Home <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage
