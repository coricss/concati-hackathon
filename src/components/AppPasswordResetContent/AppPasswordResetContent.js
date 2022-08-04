import React from 'react';
import PropTypes from 'prop-types';
import './AppPasswordResetContent.css';

const AppPasswordResetContent = () => (
  <div className="AppPasswordResetContent" data-testid="AppPasswordResetContent">
    <div className="container">
      <div className='reset-pass-form-container'>
        <form>
          <div className="form-group text-uppercase">
            <h1 className='text-danger'>Reset your password</h1>
          </div>
          <hr className='text-white'></hr>
          <p className='text-white'>
            Enter your user account's email address and we will send you a password reset link.
          </p>
          <center className='mt-4'>
            <div className="form-group mb-3 reset-pass-inputs">
              <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
            </div>
            <div className="form-group w-100">
              <button className='btn btn-danger btn-lg w-75'>Send password reset email</button>
            </div>
          </center>
        </form>
      </div>
    </div>
  </div>
);

AppPasswordResetContent.propTypes = {};

AppPasswordResetContent.defaultProps = {};

export default AppPasswordResetContent;
