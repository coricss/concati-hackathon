import React from 'react';
import PropTypes from 'prop-types';
import './AppLoginContent.css';

class AppLoginContent extends React.Component {
  render(){
    return (
      <div className="AppLoginContent" data-testid="AppLoginContent">
        <div className="container">
          <div className='login-form-container'>
            <form>
              <div className="form-group text-uppercase">
                <h1 className='text-danger'>Login</h1>
              </div>
              <hr className='text-white'></hr>
              <center className='mt-4'>
                <div className="form-group mb-3 login-inputs">
                  <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group mb-3 login-inputs">
                  <input type="password" className="form-control" id="pwd" placeholder="Password" />
                </div>
                
                <div className="form-group w-100">
                  <button className='btn btn-danger btn-lg w-75'>Login</button>
                </div>
                <div className="mb-3 text-white d-lg-flex justify-content-between w-75">
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
      </div>
    );
  }
  
}

AppLoginContent.propTypes = {};

AppLoginContent.defaultProps = {};

export default AppLoginContent;
