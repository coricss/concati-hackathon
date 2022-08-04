import React from 'react';
import PropTypes from 'prop-types';
import './AppHomeContent.css';

import MainImg from '../../images/Online dating-amico.png';

const AppHomeContent = () => (
  <div className="AppHomeContent" data-testid="AppHomeContent">
    <div className="container text-white">
      <div className="row">
        <div className="col-lg-6 col-md-12 AppTitle">
          <div className='AppHomeTitle text-uppercase'>            
            <h1>Welcome to Keep</h1>
          </div>
         
          <p>
            Keep is a simple, secure, and free online password manager.
          </p>
          <p>
            It&apos;s easy to use, and your passwords are safe with us.
          </p>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="AppHomeImage">
            <img src={MainImg} width='500px'/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

AppHomeContent.propTypes = {};

AppHomeContent.defaultProps = {};

export default AppHomeContent;
