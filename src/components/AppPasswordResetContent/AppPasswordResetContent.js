import React from 'react';
import PropTypes from 'prop-types';
import './AppPasswordResetContent.css';

class AppPasswordResetContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredEmail: false,
      sentOTP: false,
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
          enteredEmail: true
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
    alert(one_time_pass);
    // this.setState({
    //   loading: true
    // });
    // setTimeout(() => {
    //   this.setState({
    //     loading: false,
    //   });
    // }, 2000);

    // if(one_time_pass===this.state.oneTimePass){
    //   setTimeout(() => {
    //     this.setState({
    //       sentOTP: true
    //     })
    //   }, 2000);
    // }else {
    //   alert();
    // }
  }

  onChangeEmail = (e) => {
    // disable button
    this.setState({
      isTypeEmail: e.target.value.length > 0
    })
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
<<<<<<< HEAD
          <form action="http://localhost:8000/resetPassword.php" method='POST'>
=======
          
>>>>>>> e81396f4df70b789819428e65beb030290e51de1
            <div className="form-group text-uppercase">
              <h1 className='text-danger'>Reset your password</h1>
            </div>
            <hr className='text-white'></hr>
            {
              this.state.enteredEmail == false ?
              <>
                <p className='text-white'>
                Check your email for one-time-password (OTP). If it doesn&apos;t appear, check your spam folder.
                </p>
                <form onSubmit={this.sendOTP}>
                  <center className='mt-4'>
                    <div className="form-group mb-3 reset-pass-inputs">
                      <input type="password" className="one-time-pass" id="one-time-pass" placeholder="* * * * *" name='one_time_pass'></input>
                    </div>
                    <div className="form-group w-100">
                      <button type='button' className='btn btn-danger btn-lg btn-send-otp rounded-5'>
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
              :
              <>
                <p className='text-white'>
                  Enter your user account's email address and we will send you a password reset link.
                </p>
<<<<<<< HEAD
                <center className='mt-4'>
                  <div className="form-group mb-3 reset-pass-inputs">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.onChangeEmail} required/>
                  </div>
                  <div className="form-group w-100">
                    <button className='btn btn-danger btn-lg w-75 rounded-5' name="resetPassword" disabled={this.state.isTypeEmail == false ? true : false}>Done</button>
                  </div>
                </center>
=======
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
>>>>>>> e81396f4df70b789819428e65beb030290e51de1
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
