import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';

import logo from '../../images/TellMe-logo.png';
class AppHeader extends React.Component {

  onClickRegister = () => {
    window.location.href = '/register';
  }
  onClickLogin = () => {
    window.location.href = '/login';
  }
  render(){
    return(
      <div className='AppHeader'data-testid="AppHeader">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100">
              <a className="navbar-brand" href="/">
                <div className='d-flex align-items-center'>
                  <img src={ logo } alt="Keep logo" width='50px' />
                  <h1 className='fw-bold text-danger ms-2 m-0'>TellMe</h1>
                </div>
              </a>
              <div className="d-flex align-items-center gap-2">
                <button className='btn btn-primary btn-login fw-bold' onClick={this.onClickLogin}>Login</button>
                <button className='btn btn-outline-danger btn-sign-up fw-bold' onClick={this.onClickRegister}>Get started</button>
              </div>
            </div>
            
          </div>
        </nav>
      </div>
    )
  }
  
};

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
