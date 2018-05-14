import React from 'react'
import PropTypes from 'prop-types'

import Example from '../../components/example'

class Main extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>
          {this.props.text}
        </h1>
        <div>
          <Example />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  text: PropTypes.string
}

export default Main
