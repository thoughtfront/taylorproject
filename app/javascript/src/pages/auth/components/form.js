import React from "react"
import PropTypes from "prop-types"

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: `${props.type}[email]`,
      password: `${props.type}[password]`,
    }
  }

  render () {
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
  }
}

Form.propTypes = {
  url: PropTypes.string,
  buttonText: PropTypes.string,
  type: PropTypes.string,
};
export default Form