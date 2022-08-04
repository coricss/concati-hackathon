import React from 'react';
import PropTypes from 'prop-types';
import './AppRegisterContent.css';

const AppRegisterContent = () => (
  <div className="AppRegisterContent" data-testid="AppRegisterContent">
    <div className="container">
      <div className='form-container'>
        <form className='w-50'>
          <div className="form-group text-uppercase">
            <h1 className='text-danger'>Register Here</h1>
          </div>
          <hr className='text-white'></hr>
          <div className='input-container mt-4'>
            <div className="form-group w-50 mb-3">
              <input type="text" className="form-control" id="username" placeholder="Username" />
            </div>
            <div className="form-group w-50 mb-3">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="form-group w-50 mb-3">
              <input type="password" className="form-control" id="pwd" placeholder="Password" />
            </div>
            <div className="form-group w-50 mb-3">
              <input type="password" className="form-control" id="pwd2" placeholder="Confirm password" />
            </div>
            <div className="w-50 mb-3 text-white">
              <input type="checkbox" className="form-check-input me-2" id="checkbox" placeholder="Confirm password" />
              <label htmlFor='checkbox'>I am over 18 years old</label>
            </div>
            <div className="form-group w-100 mb-3">
              <button className='btn btn-danger btn-lg w-50' >Get started</button>
            </div>
            <small className='text-white'>Do you already have an account? <a href='/login' className='text-danger fw-bold text-decoration-none'>Login</a></small>
          </div>
        </form>
      </div>
    </div>
  </div>
);

AppRegisterContent.propTypes = {};

AppRegisterContent.defaultProps = {};

export default AppRegisterContent;
