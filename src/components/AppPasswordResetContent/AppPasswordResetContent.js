import React from 'react';
import PropTypes from 'prop-types';
import './AppPasswordResetContent.css';

class AppPasswordResetContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredEmail: false,
      sentOTP: false,
      isChangedPass: false,
      registeredEmail: false,
      isTypeEmail: false,
      email: localStorage.getItem('email'),
      loading: false,
      error: '',
      oneTimePass: '1234'
    }
  }
  returnLogin = () => {
    window.location.href = '/login';
  }

 
  emailSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.email.value;

    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);

    if(emailInput==this.state.email){
      setTimeout(() => {
        this.setState({
          enteredEmail: true,
          error: ''
        })
      }, 2000);
    }else{
      setTimeout(() => {
        this.setState({
          error: 'Invalid email'
        });
      }, 2000);
    }
  }

  sendOTP = (e) => {
    e.preventDefault();
    const one_time_pass = e.target.one_time_pass.value;
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);

    if(one_time_pass===this.state.oneTimePass){
      setTimeout(() => {
        this.setState({
          sentOTP: true,
          error: ''
        })
      }, 2000);
    }else {
      setTimeout(() => {
        this.setState({
          error: 'Invalid OTP'
        });
      }, 2000);
    }
  }

  onChangeEmail = (e) => {
    // disable button
    this.setState({
      isTypeEmail: e.target.value.length > 0
    })
  }

  changePassword = (e) => {
    e.preventDefault();
    const new_password = e.target.new_password.value;
    const confirm_password = e.target.confirm_password.value;
    this.setState({
      loading: true,
      error: ''
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
    if(new_password===confirm_password){
      setTimeout(() => {
        this.setState({
          isChangedPass: true,
          error: ''
        })
        window.location.href = '/login';
      }, 2000);
    }else {
      setTimeout(() => {
        this.setState({
          error: 'Password does not match'
        });
      } , 2000);
    }
  }

  resetAlert = () => {
    this.setState({
      error: ''
    });
  }

  render(){
  return(
    <div className="AppPasswordResetContent" data-testid="AppPasswordResetContent">
      <div className="container">
        <div className='reset-pass-form-container'>
          
            <div className="form-group text-uppercase">
              <h1 className='text-danger'>Reset password</h1>
            </div>
            <hr className='text-white' style={{width: '500px'}}></hr>
            {
              this.state.enteredEmail == false?
              <>
                {
                  this.state.sentOTP == false ?
                  <>
                    <p className='text-white'>
                    Finally, enter your new password below.
                    </p>
                    <form onSubmit={this.changePassword}>
                      <center className='mt-4'>
                        {
                          this.state.error ?
                          <div class="alert alert-danger alert-dismissible fade show alert-reset-email mx-0" role="alert">
                            <small>{this.state.error}</small>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.resetAlert}></button>
                          </div>
                          : null
                        }
                        <div className="form-group mb-3 reset-pass-inputs">
                          <input type="password" className="new_password" id="new_password" placeholder="New password" name='new_password' required autoComplete='off'></input>
                        </div>
                        <div className="form-group mb-3 reset-pass-inputs">
                          <input type="password" className="confirm_password" id="confirm_password" placeholder="Confirm password" name='confirm_password' required autoComplete='off'></input>
                        </div>
                        <div className="form-group w-100">
                          <button className='btn btn-danger btn-lg btn-send-otp rounded-5'>
                            {
                              this.state.loading ?
                              <div className='spinner-border spinner-border-sm' role='status'></div>
                              : 'Done'
                            }
                          </button>
                        </div>
                      </center>
                    </form>
                  </>
                  :
                  <>
                    <p className='text-white'>
                    Check your email for one-time-password (OTP). If it doesn&apos;t appear, check your spam folder.
                    </p>
                    <form onSubmit={this.sendOTP}>
                      <center className='mt-4'>
                        {
                          this.state.error ?
                          <div class="alert alert-danger alert-dismissible fade show alert-reset-email mx-0" role="alert">
                            <small>{this.state.error}</small>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.resetAlert}></button>
                          </div>
                          : null
                        }
                        <div className="form-group mb-3 reset-pass-inputs">
                          <input type="password" className="one-time-pass" id="one-time-pass" placeholder="* * * * *" name='one_time_pass'></input>
                        </div>
                        <div className="form-group w-100">
                          <button className='btn btn-danger btn-lg btn-send-otp rounded-5'>
                            {
                              this.state.loading ?
                              <div className='spinner-border spinner-border-sm' role='status'></div>
                              : 'Send OTP'
                            }
                          </button>
                        </div>
                      </center>
                    </form>
                  </>
                }
              </>
              :
              <>
                <p className='text-white'>
                  Enter your user account's email address and we will send you a password reset link.
                </p>
                <form onSubmit={this.emailSubmit}>
                  <center className='mt-4'>
                    {
                      this.state.error ?
                      <div class="alert alert-danger alert-dismissible fade show alert-reset-email mx-0" role="alert">
                        <small>{this.state.error}</small>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.resetAlert}></button>
                      </div>
                      : null
                    }
                   
                      <div className="form-group mb-3 reset-pass-inputs">
                        <input type="email" className="form-control" id="email" placeholder="Email" name='email' onChange={this.onChangeEmail} required/>
                      </div>
                      <div className="form-group w-100">
                        <button className='btn btn-danger btn-lg btn-reset-pass rounded-5' disabled={this.state.isTypeEmail == false ? true : false}>
                          {
                            this.state.loading == true ? <div className='spinner-border spinner-border-sm' role='status'></div> : 'Done'
                          }
                        </button>
                      </div>
               
                  </center>
                </form>
              </>
            }
        
        </div>
      </div>
    </div>
    )
  }
}

AppPasswordResetContent.propTypes = {};

AppPasswordResetContent.defaultProps = {};

export default AppPasswordResetContent;
