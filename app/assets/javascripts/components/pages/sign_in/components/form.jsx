
var SignInForm = createReactClass({
  propTypes: {
    url: PropTypes.string,
  },

  render: function() {
    let meta = document.querySelector('meta[name="csrf-token"]').content;
    return (
      <div className='card-panel'>
        <div className='header text-center'>
          <img className='sign-in-logo' src='assets/logo_250.webp'>
          </img>
          <h3 className='text-center'>
            Sign In
          </h3>
        </div>
        <form id='sign-in' action={this.props.url} method="post">
          <div className='body'>
            <input type='hidden' name='authenticity_token' value={meta} />
            <div className='form-input'>
              <label>Email:
                <input name='session[email]' id='session_email' />
              </label>
            </div>
            <div className='form-input'>
              <label>Password:
                <input type='password' name='session[password]' id='session_password' />
              </label>
            </div>
          </div>
          <div className='footer text-right'>
            <button type='submit' name='action' className='btn waves-effect orange darken-1'>
              Sign In
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </form>
      </div>
    );
  },
});
