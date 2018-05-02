import React from "react"
import PropTypes from "prop-types"
import Form from "./components/form"
import { CSSTransition } from "react-transition-group"

class SignIn extends React.Component {
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
            </CSSTransition>
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
