
Auth.Form = createReactClass({
  propTypes: {
    url: PropTypes.string,
    buttonText: PropTypes.string,
    type: PropTypes.string,
  },

  getInitialState: function() {
    return {
      email: `${this.props.type}[email]`,
      password: `${this.props.type}[password]`,
    }
  },

  render: function() {
    let meta = document.querySelector('meta[name="csrf-token"]').content;
    return (
      <form id='auth' action={this.props.url} method="post">
        <div className='body'>
          <input type='hidden' name='authenticity_token' value={meta} />
          <div className='form-input'>
            <label>Email:
              <input name={this.state.email} id='email' />
            </label>
          </div>
          <div className='form-input'>
            <label>Password:
              <input type='password' name={this.state.password} id='password' />
            </label>
          </div>
        </div>
        <div className='footer text-right'>
          <button type='submit' name='action' className='btn waves-effect orange darken-1'>
            {this.props.buttonText}
            <i className='material-icons right'></i>
          </button>
        </div>
      </form>
    );
  },
});
