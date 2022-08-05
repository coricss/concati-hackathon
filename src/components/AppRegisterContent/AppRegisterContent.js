import React from 'react';
import PropTypes from 'prop-types';
import './AppRegisterContent.css';
import axios from 'axios';

 
class AppRegisterContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }


  handleRegister=(e)=>{
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.pwd.value;
    let password2 = e.target.pwd2.value;
    let mobile = e.target.phone.value;

    if(password !== password2){
      setTimeout(() => {
        this.setState({
          error: 'Password do not match!'
        });
      }, 2000);
    }
    else{
      axios.post('http://localhost:8000/createAccount.php?email='+email+'&password='+password+'&mobile='+mobile)
      .then(res=>{
        console.log(res);

        setTimeout(() => {
          this.setState({
            error: res.data.message
          });
        }, 2000);
        
      })
    }


  }


  render(){
    return(
      <div className="AppRegisterContent" data-testid="AppRegisterContent">
        <div className="">
          <div className='register-form-container'>
            <form onSubmit={this.handleRegister}>
              <div className="form-group text-uppercase">
                <h1 className='text-danger'>Register</h1>
              </div>
              <hr className='text-white'></hr>
              <center className='mt-4'>
              {
                this.state.error ? 
                <div class="alert alert-success alert-dismissible fade show w-100 mx-0" role="alert">
                  <small>{this.state.error}</small>
                  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.resetAlert}></button>
                </div>
                : null
              }
                {/* <div className="form-group mb-3 register-inputs">
                  <input type="text" className="form-control" id="username" name="username"placeholder="Username" required />
                </div> */}
                <div className="form-group mb-3 register-inputs">
                  <input type="email" className="form-control" id="email" placeholder="Email" name="email"required />
                </div>
                
                <div className="form-group mb-3 register-inputs">
                  <input type="text" pattern='(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})' maxLength={11} className="form-control" id="phone" name='phone'placeholder="09XXXXxxxxx" required />
                </div>
                <div className="form-group mb-3 register-inputs">
                  <input type="password" className="form-control" id="pwd" name='pwd'placeholder="Password" required />
                </div>
                <div className="form-group mb-3 register-inputs">
                  <input type="password" className="form-control" id="pwd2" name="pwd2"placeholder="Confirm password" required />
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
