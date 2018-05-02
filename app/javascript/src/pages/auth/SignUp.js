import React from "react"
import PropTypes from "prop-types"
import Form from "./components/form"
import { CSSTransition } from "react-transition-group"

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    this.setState({show: true});
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <CSSTransition in={this.state.show} timeout={100} classNames="auth">
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
            </CSSTransition>
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
