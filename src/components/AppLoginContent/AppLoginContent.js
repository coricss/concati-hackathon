import React from 'react';
import PropTypes from 'prop-types';
import './AppLoginContent.css';

class AppLoginContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //hardcoded for now
      email: 'rics@gmail.com',
      password: '123',
      isLogin: false,
      error: '',
      loading: false,
    };
  }

//LOGIN FUNCTION
  handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const data = {
    //   email: email,
    //   password: password
    // }
    // this.props.login(data);

    //set loadng to true
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
   
    //login verification
    if( email == this.state.email && password == this.state.password ){
      setTimeout(() => {
        this.setState({
          isLogin: true
        });
        //set email and login status to localstorage for now
        localStorage.setItem('isLogin', true);
        var username = email.split('@')[0];
        localStorage.setItem('username', username);
        window.location.href = '/inbox';
      }, 2000);
    }else {
      //alert error when invalid login
      setTimeout(() => {
        this.setState({
          error: 'Invalid email or password'
        });
      }, 2000);
    }
  }

  resetAlert = () => {
    this.setState({
      error: ''
    });
  }

  render(){
    return (
      <div className="AppLoginContent" data-testid="AppLoginContent">
        <div className='login-form-container'>
          <form onSubmit={this.handleLogin}>
            <div className="form-group text-uppercase">
              <h1 className='text-danger'>Login</h1>
            </div>
            <hr className='text-white'></hr>
            <center className='mt-4'>
              {
                this.state.error ? 
                <div class="alert alert-danger alert-dismissible fade show w-100 mx-0" role="alert">
                  <small>{this.state.error}</small>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.resetAlert}></button>
                </div>
                : null
              }
              <div className="form-group mb-3 login-inputs">
                <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
              </div>
              <div className="form-group mb-3 login-inputs">
                <input type="password" className="form-control" id="pwd" placeholder="Password" name="password" required />
              </div>
              <div className="form-group w-100">
                <button className='btn btn-danger btn-lg w-100 rounded-5'>
                  {
                    this.state.loading == true ? <div className='spinner-border spinner-border-sm' role='status'></div> : 'Login'
                  }
                </button>
              </div>
              <div className="mb-3 text-white d-lg-flex justify-content-between w-100">
                <div className='m-1'>
                  <input type="checkbox" className="form-check-input me-2" id="checkbox" placeholder="Confirm password" />
                  <label htmlFor='checkbox'>Remember me</label>
                </div>
                <div className='m-1'>
                  <small><a href='/password_reset' className='text-white text-decoration-none'>Forgot password?</a></small>
                </div>
              </div>
              <small className='text-white'>Don't have an account? <a href='/register' className='text-danger fw-bold text-decoration-none'>Get started</a></small>
            </center>
          </form>
        </div>
      </div>
    );
  }
  
}

AppLoginContent.propTypes = {};

AppLoginContent.defaultProps = {};

export default AppLoginContent;
