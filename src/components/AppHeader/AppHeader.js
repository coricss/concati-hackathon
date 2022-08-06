import React from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';
import axios from 'axios';


import logo from '../../images/TellMe-logo.png';

import {
  Modal
} from 'react-bootstrap';

import {
  FaStar
} from 'react-icons/fa';

import { useState } from "react";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AppHeader = () => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const StarRating = () => {
  
  //localStorage.setItem("rating", rating);
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

  const [state, setState] = useState({
      loading: false,
      showModal: false,
      rating: localStorage.getItem('rating')
  });

  const onClickRegister = () => {
    window.location.href = '/register';
  }
 const onClickLogin = () => {
    window.location.href = '/login';
  }

  const logOut = () => {
    localStorage.removeItem('username');
    setState({
      loading: true
    });
    setTimeout (() => {
      setState({
        loading: false
      });
      localStorage.setItem('isLogin', false);
      window.location.href = '/login';
    }, 2000);
  }

  const onShow = () => {
    setState({
      showModal: true
    });
  }

  const onHide = () => {
    setState({
      showModal: false
    });
  }

  const submitFeedback = (e) => {
    e.preventDefault();

    const rate = e.target.rate.value;

    axios.post('http://localhost:8000/setRate.php?rate='+rate)
    .then(res=>{
      console.log(res);

      if(res.data.code==200){
        const MySwal = withReactContent(Swal)
            MySwal.fire({
              title: res.data.message,
              icon: 'success',
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              
            }).then(() => {
              window.location.href = '/inbox';
            })
      }else{
        const MySwal = withReactContent(Swal)
            MySwal.fire({
              title: res.data.message,
              icon: 'warning',
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
            })
      }
    })
    // const data = new FormData(e.target);
    // const rate = data.get('rate');
    // alert(e.target.rate.value);
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
    return (
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
                      state.loading == true
                      ? <div className='spinner-border spinner-border-sm text-white' role='status'></div>
                      : <>
                          <button className='btn btn-primary btn-login fw-bold' onClick={onShow}>Send feedback</button>
                          <button className='btn btn-outline-danger btn-sign-up fw-bold rounded-5' onClick={logOut}>Logout</button>
                        </>
                    }
                  </div>
                : 
                  <div className="d-flex align-items-center gap-2">
                    <button className='btn btn-primary btn-login fw-bold' onClick={onClickLogin}>Login</button>
                    <button className='btn btn-outline-danger btn-sign-up fw-bold rounded-5' onClick={onClickRegister}>Get started</button>
                  </div>
              }
            </div>
            <Modal 
              show={state.showModal} 
              onHide={onHide} 
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
                <form onSubmit={submitFeedback}>
                  <input value={rating} name='rate' id='rating' type='hidden'/>
                  <button className='btn btn-danger btn-lg'>Submit</button>
                </form>
              </Modal.Footer>
            </Modal>
          </div>
        </nav>
      </div>
      )
};

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
