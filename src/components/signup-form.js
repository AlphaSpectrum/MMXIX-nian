import React from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

const SignupForm = () => (
    <>
    <h4>Want to be in the loop?</h4>
    <Form
      action="https://alan-campos.us19.list-manage.com/subscribe/post?u=a3e6856a386fb7c458d933e71&amp;id=b568efca23"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <FormGroup>
        <Label
          for="mce-EMAIL"
        >
          <Input
            type="email"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
        </Label>
        <div
          style={{
            position: 'absolute',
            left: '-5000px'
          }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_a3e6856a386fb7c458d933e71_b568efca23"
            tabIndex="-1"
          />
        </div>
        <Button
          color="danger"
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
          style={{
            marginLeft: '0.2rem',
            marginBottom: '3px'
          }}
        >
                Sign up!
        </Button>
      </FormGroup>
    </Form>
    </>
)

export default SignupForm
