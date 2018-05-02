import React from "react"
import PropTypes from "prop-types"
import Form from "./components/form"

class SignUp extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <div className='card-panel'>
              <div className='header text-center'>
                <img className='sign-in-logo' src='assets/logo_250.webp'>
                </img>
                <h3 className='text-center'>
                  Sign Up
                </h3>
                <div>
                  Already have an account?
                  <a href={this.props.signinUrl}>  Sign In</a>
                </div>
              </div>
              <Form url={this.props.submitUrl} buttonText='Sign Up' type='user'></Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  submitUrl: PropTypes.string,
  signinUrl: PropTypes.string
};
export default SignUp
