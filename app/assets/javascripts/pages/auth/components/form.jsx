
Auth.Form = createReactClass({
  propTypes: {
    url: PropTypes.string,
  },

  render: function() {
    let meta = document.querySelector('meta[name="csrf-token"]').content;
    return (
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
    );
  },
});
