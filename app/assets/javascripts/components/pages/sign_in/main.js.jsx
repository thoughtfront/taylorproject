
Pages.SignIn = createReactClass({
  propTypes: {
    url: PropTypes.string,
  },

  render: function() {
    let meta = document.querySelector('meta[name="csrf-token"]').content;
    return (
      <React.Fragment>
        <h3>
          Sign In
        </h3>
        <form id='sign-in' action={this.props.url} method="post">
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
          <div className='controls'>
            <input type='submit' name='commit' value='Sign In' />
          </div>
        </form>
      </React.Fragment>
    );
  },
});
