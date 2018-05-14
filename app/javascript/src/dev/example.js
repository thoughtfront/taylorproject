import React from "react"
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { incrementCount, decrementCount } from "../store/actions/example"

class Example extends React.Component {
  render () {
    var { increment, decrement } = this.props;
    return (
      <div>
        <h3>Example</h3>
        <div>Count: { this.props.count }</div>
        <div>
          <button onClick={ increment }>UP</button>
          <button onClick={ decrement }>DOWN</button>
        </div>
      </div>
    );
  }
}

Example.propTypes = {
  count: PropTypes.number,
}

const mapStateToProps = state => ({
  count: state.example.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCount),
  decrement: () => dispatch(decrementCount),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example)
