import React from 'react';
import PropTypes from 'prop-types';
import './AppHomeContent.css';

import MainImg from '../../images/Online dating-amico.png';


class AppHomeContent extends React.Component {
  onClickRegister = () => {
    window.location.href = '/register';
  }
  render(){
    return(
      <div className="AppHomeContent" data-testid="AppHomeContent">
        <div className="container text-white">
          <div className="row g-4">
            <div className="col-lg-7 col-md-12 AppTitle">
              <div className='AppHomeTitle text-uppercase text-lg-start text-center'>            
                <h1>Do you wonder what other people think about you?</h1>
              </div>
              <div className='AppSubtitle mb-5 text-lg-start text-center'>
                <p className='fs-5'>Make your link below and get their messages anonymously!</p>
              </div>
              <div className='AppMainButton w-100 text-lg-start text-center'>
                <button className='btn btn-outline-danger btn-get-link btn-lg p-3 px-4' onClick={this.onClickRegister}>
                  Create your link
                </button>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="AppHomeImage">
                <img src={MainImg} width='100%'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AppHomeContent.propTypes = {};

AppHomeContent.defaultProps = {};

export default AppHomeContent;
