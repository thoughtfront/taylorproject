import React from "react"
import PropTypes from "prop-types"
import Form from "./components/form"

class SignIn extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <div className='card-panel'>
              <div className='header text-center'>
                <img className='sign-in-logo' src='assets/logo_250.webp'>
                </img>
                <h3>
                  Sign In
                </h3>
                <div>
                  No Account?
                  <a href={this.props.signupUrl}>  Sign Up</a>
                </div>
              </div>
              <div className='row'>
                <div className='col s12'>
                  <Form url={this.props.submitUrl} buttonText='Sign In' type='session'></Form>
                </div>
              </div>
              <div className='forgot text-right'>
                <a href='#'>
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  submitUrl: PropTypes.string,
  signupUrl: PropTypes.string
};
export default SignIn
