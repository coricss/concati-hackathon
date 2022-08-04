import React from 'react';
import PropTypes from 'prop-types';
import './AppFooter.css';
import {
  FaFacebook,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';

const AppFooter = () => (
  <div className="AppFooter" data-testid="AppFooter">
    <div className="container">
    <hr style={{color: 'white'}}></hr>
      <div className="row">
        <div className="col-4">
          <div className="AppFooterContent">
            <p className='fw-bold text-white'>
              Links
            </p>
            <p>
              <a href="#">Help</a>
            </p>
            <p>
              <a href="#">Privacy</a>
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="AppFooterContent">
            <p className='fw-bold text-white'>
              Contact Us
            </p>
            <p style={{fontSize: '25px'}} className='text-white d-flex align-items-center justify-content-center'>
              <a href='#'>
                <FaFacebook className="mx-2"></FaFacebook>
              </a>
              <a href='#'><FaTwitter className="mx-2">
                </FaTwitter>
              </a>
              <a href='#'>
                <FaGithub className="mx-2"></FaGithub>
              </a>
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="AppFooterContent d-flex justify-content-center">
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="Keep logo" width='100px'/>
          </div>
        </div>
        
      </div>
    </div>
  </div>
);

AppFooter.propTypes = {};

AppFooter.defaultProps = {};

export default AppFooter;
