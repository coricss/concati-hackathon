import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';

import logo from '../../images/TellMe-logo.png';

import {
  Modal
} from 'react-bootstrap';

import {
  FaStar
} from 'react-icons/fa';

import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  localStorage.setItem("rating", rating);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <FaStar className='star mx-3' size={30}></FaStar>

          </button>
        );
      })}
    </div>
  );
};
class AppHeader extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      showModal: false,
      rating: localStorage.getItem('rating')
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

  onShow = () => {
    this.setState({
      showModal: true
    });
  }

  onHide = () => {
    this.setState({
      showModal: false
    });
  }

  submitFeedback = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // const rate = data.get('rate');
    console.log(e.target.rate.value);
    // const username = localStorage.getItem('username');
    // const url = 'http://localhost:5000/api/feedback';
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: username,
    //     rate: rate
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // };
    // fetch(url, options)
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
                      : <>
                          <button className='btn btn-primary btn-login fw-bold' onClick={this.onShow}>Send feedback</button>
                          <button className='btn btn-outline-danger btn-sign-up fw-bold rounded-5' onClick={this.logOut}>Logout</button>
                        </>
                    }
                  </div>
                : 
                  <div className="d-flex align-items-center gap-2">
                    <button className='btn btn-primary btn-login fw-bold' onClick={this.onClickLogin}>Login</button>
                    <button className='btn btn-outline-danger btn-sign-up fw-bold rounded-5' onClick={this.onClickRegister}>Get started</button>
                  </div>
              }
            </div>
            <Modal 
              show={this.state.showModal} 
              onHide={this.onHide} 
              centered 
              backdrop="true" 
              keyboard={false}
              size="lg"
              className="modal-feedback"
            >
              <Modal.Header 
                className='justify-content-center' 
                closeButton={true}
                
              >
                <Modal.Title>How was your experience using this app?</Modal.Title>
              </Modal.Header>
              <Modal.Body className='text-center d-flex flex-column justify-content-center'>
                <StarRating></StarRating>
              </Modal.Body>
              <Modal.Footer className='justify-content-center'>
                <form onSubmit={this.submitFeedback}>
                  <input value={this.state.rating} name='rate' type='hidden'/>
                  <button className='btn btn-danger btn-lg'>Submit</button>
                </form>
              </Modal.Footer>
            </Modal>
          </div>
        </nav>
      </div>
    )
  }
  
};

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
