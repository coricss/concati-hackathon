import React from 'react';
import PropTypes from 'prop-types';
import './AppPasswordResetContent.css';

class AppPasswordResetContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredEmail: false,
      isTypeEmail: false
    }
  }
  returnLogin = () => {
    window.location.href = '/login';
  }

  submitEmail = (e) => {
    e.preventDefault();
    this.setState({
      enteredEmail: true
    })
  }
  onChangeEmail = (e) => {
    // disable button
    this.setState({
      isTypeEmail: e.target.value.length > 0
    })

  }
  render(){
  return(
    <div className="AppPasswordResetContent" data-testid="AppPasswordResetContent">
      <div className="container">
        <div className='reset-pass-form-container'>
          <form action="http://localhost:8000/resetPassword.php" method='POST'>
            <div className="form-group text-uppercase">
              <h1 className='text-danger'>Reset your password</h1>
            </div>
            <hr className='text-white'></hr>
            {
              this.state.enteredEmail ?
              <>
                <p className='text-white'>
                Check your email for a link to reset your password. If it doesn&apos;t appear within a few minutes, check your spam folder.
                </p>
                <div className="form-group w-100">
                    <button type='button' className='btn btn-danger btn-lg w-75 rounded-5' onClick={this.returnLogin}>Return to login</button>
                </div>
              </>
              :
              <>
                <p className='text-white'>
                  Enter your user account's email address and we will send you a password reset link.
                </p>
                <center className='mt-4'>
                  <div className="form-group mb-3 reset-pass-inputs">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.onChangeEmail} required/>
                  </div>
                  <div className="form-group w-100">
                    <button className='btn btn-danger btn-lg w-75 rounded-5' name="resetPassword" disabled={this.state.isTypeEmail == false ? true : false}>Done</button>
                  </div>
                </center>
              </>
            }
          </form>
        </div>
      </div>
    </div>
    )
  }
}

AppPasswordResetContent.propTypes = {};

AppPasswordResetContent.defaultProps = {};

export default AppPasswordResetContent;
