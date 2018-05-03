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
        <input type='hidden' name='authenticity_token' value={meta} />
        <div className='row'>
          <div className='col s12'>
            <div className='row'>
              <div className='input-field col s12'>
                <i className='material-icons prefix'>mail</i>
                <input type='email' name={this.state.email} id='email' className='validate' />
                <label htmlFor='email'>Email</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <i className='material-icons prefix'>lock</i>
                <input type='password' name={this.state.password} id='password' className='validate' />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
            <div className='footer text-right'>
              <button type='submit' name='action' className='btn waves-effect orange darken-1'>
                {this.props.buttonText}
                <i className='material-icons right'></i>
              </button>
            </div>
          </div>
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
