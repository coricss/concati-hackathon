import React from 'react';
import PropTypes from 'prop-types';
import './AppRegisterContent.css';

const AppRegisterContent = () => (
  <div className="AppRegisterContent" data-testid="AppRegisterContent">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Register</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Confirm Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AppRegisterContent.propTypes = {};

AppRegisterContent.defaultProps = {};

export default AppRegisterContent;
