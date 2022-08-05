import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';

import logo from '../../images/TellMe-logo.png';
class AppHeader extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  onClickRegister = () => {
    window.location.href = '/register';
  }
  onClickLogin = () => {
    window.location.href = '/login';
  }

  logOut = () => {
    localStorage.removeItem('username');
    this.setState({
      loading: true
    });
    setTimeout (() => {
      this.setState({
        loading: false
      });
      localStorage.setItem('isLogin', false);
      window.location.href = '/login';
    }, 2000);
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
              {
                localStorage.getItem('isLogin') == 'true' 
                ? <div className="d-flex align-items-center gap-2">
                    {
                      this.state.loading == true
                      ? <div className='spinner-border spinner-border-sm text-white' role='status'></div>
                      : <button className='btn btn-outline-danger btn-sign-up fw-bold rounded-5' onClick={this.logOut}>Logout</button>
                    }
                  </div>
                : 
                  <div className="d-flex align-items-center gap-2">
                    <button className='btn btn-primary btn-login fw-bold' onClick={this.onClickLogin}>Login</button>
                    <button className='btn btn-outline-danger btn-sign-up fw-bold rounded-5' onClick={this.onClickRegister}>Get started</button>
                  </div>
              }
              
             
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
