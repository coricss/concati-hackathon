import React from 'react';
import PropTypes from 'prop-types';
import './AppRegisterContent.css';
 
class AppRegisterContent extends React.Component {
  render(){
    return(
      <div className="AppRegisterContent" data-testid="AppRegisterContent">
        <div className="">
          <div className='register-form-container'>
            <form action='http://localhost:8000/createAccount.php' method='POST'>
              <div className="form-group text-uppercase">
                <h1 className='text-danger'>Register</h1>
              </div>
              <hr className='text-white'></hr>
              <center className='mt-4'>
<<<<<<< HEAD
                {/* <div className="form-group mb-3 register-inputs">
                  <input type="text" className="form-control" id="username" name="username"placeholder="Username" required />
                </div> */}
                <div className="form-group mb-3 register-inputs">
                  <input type="email" className="form-control" id="email" placeholder="Email" name="email"required />
                </div>
=======
                
>>>>>>> e81396f4df70b789819428e65beb030290e51de1
                <div className="form-group mb-3 register-inputs">
                  <input type="password" className="form-control" id="pwd" name="password" placeholder="Password" required />
                </div>
                <div className="form-group mb-3 register-inputs">
<<<<<<< HEAD
                  <input type="password" className="form-control" id="pwd2" name="confirmPassword" placeholder="Confirm password" required />
=======
                  <input type="text" pattern='(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})' maxLength={11} className="form-control" id="phone" placeholder="09XXXXxxxxx" required />
                </div>
                <div className="form-group mb-3 register-inputs">
                  <input type="password" className="form-control" id="pwd" placeholder="Password" required />
                </div>
                <div className="form-group mb-3 register-inputs">
                  <input type="password" className="form-control" id="pwd2" placeholder="Confirm password" required />
>>>>>>> e81396f4df70b789819428e65beb030290e51de1
                </div>
                <div className="mb-3 text-white">
                  <input type="checkbox" className="form-check-input me-2 checkbox" id="checkbox" placeholder="Confirm password" />
                  <label htmlFor='checkbox'>I am over 18 years old</label>
                </div>
                <div className="form-group w-100 mb-3">
                  <button className='btn btn-danger btn-lg w-100 rounded-5' name="createAccount" >Get started</button>
                </div>
                <small className='text-white'>Already have an account? <a href='/login' className='text-danger fw-bold text-decoration-none'>Login</a></small>
              </center>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
}

AppRegisterContent.propTypes = {};

AppRegisterContent.defaultProps = {};

export default AppRegisterContent;
