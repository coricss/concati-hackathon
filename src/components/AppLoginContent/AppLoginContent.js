import React from 'react';
import PropTypes from 'prop-types';
import './AppLoginContent.css';

const AppRegisterContent = () => (
  <div className="AppRegisterContent" data-testid="AppRegisterContent">
    <div className="container">
      <div className='form-container'>
        <form className='w-50'>
          <div className="form-group text-uppercase">
            <h1 className='text-danger'>Login</h1>
          </div>
          <hr className='text-white'></hr>
          <center className='mt-4'>
            <div className="form-group mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group mb-3">
              <input type="password" className="form-control" id="pwd" placeholder="Password" />
            </div>
            <div className="mb-3 text-white d-lg-flex justify-content-around">
              <div className='m-1'>
                <input type="checkbox" className="form-check-input me-2" id="checkbox" placeholder="Confirm password" />
                <label htmlFor='checkbox'>Remember me</label>
              </div>
              <div className='m-1'>
                <small><a href='/login' className='text-white text-decoration-none'>Forgot password?</a></small>
              </div>
            </div>
            <div className="form-group w-100 mb-3">
              <button className='btn btn-danger btn-lg w-75'>Login</button>
            </div>
            <small className='text-white'>Don't have an account? <a href='/register' className='text-danger fw-bold text-decoration-none'>Get started</a></small>
          </center>
        </form>
      </div>
    </div>
  </div>
);

AppRegisterContent.propTypes = {};

AppRegisterContent.defaultProps = {};

export default AppRegisterContent;
