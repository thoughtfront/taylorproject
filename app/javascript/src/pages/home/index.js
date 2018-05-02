import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>
          {this.props.text}
        </h1>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  text: PropTypes.string
}

export default Main
