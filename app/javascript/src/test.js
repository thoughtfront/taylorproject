import React from "react"
import PropTypes from "prop-types"

class Test extends React.Component {
  render () {
    return (
      <div className='container'>
        TEST man
      </div>
    );
  }
}

Test.propTypes = {
  submitUrl: PropTypes.string,
  signupUrl: PropTypes.string
};
export default Test