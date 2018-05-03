import React from "react"
import PropTypes from "prop-types"

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setState({show: true});
  }

  render () {
    return (
      <div className='container'>
        <h1>TEST</h1>
      </div>
    );
  }
}

export default Test
