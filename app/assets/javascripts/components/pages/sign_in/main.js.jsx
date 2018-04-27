
Pages.SignIn = createReactClass({
  propTypes: {
    url: PropTypes.string,
  },

  render: function() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <SignInForm url={this.props.url}></SignInForm>
          </div>
        </div>
      </div>
    );
  },
});
