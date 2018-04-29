window.Auth = {}
//= require_tree ./components

Pages.SignIn = createReactClass({
  propTypes: {
    url: PropTypes.string,
  },

  render: function() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <div className='card-panel'>
              <div className='header text-center'>
                <img className='sign-in-logo' src='assets/logo_250.webp'>
                </img>
                <h3 className='text-center'>
                  Sign In
                </h3>
              </div>
              <Auth.Form url={this.props.url}></Auth.Form>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

Pages.SignUp = createReactClass({
  propTypes: {
    url: PropTypes.string,
  },

  render: function() {
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
              </div>
              <Auth.Form url={this.props.url}></Auth.Form>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
