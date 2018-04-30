Pages.SignUp = createReactClass({
  propTypes: {
    submitUrl: PropTypes.string,
    signinUrl: PropTypes.string,
    errors: PropTypes.object,
  },

  render: function() {
    console.log('errors', this.props.errors);
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
              <Auth.Form url={this.props.submitUrl} buttonText='Sign Up' type='user'></Auth.Form>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
