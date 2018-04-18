var Main = createReactClass({
  propTypes: {
    text: PropTypes.string
  },

  render: function() {
    return (
      <React.Fragment>
        <h1>
          {this.props.text}
        </h1>
      </React.Fragment>
    );
  }
});
