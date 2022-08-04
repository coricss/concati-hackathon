import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';

class AppHeader extends React.Component {
  render(){
    return(
      <div className='AppHeader'data-testid="AppHeader">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <a className="navbar-brand" href="#">
                  <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="Keep logo" />
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className='btn btn-primary btn-login'>Login</button>
                <button className='btn btn-primary btn-sign-up'>Get Started</button>
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
