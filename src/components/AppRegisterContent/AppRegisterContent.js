import React from 'react';
import PropTypes from 'prop-types';
import './AppRegisterContent.css';
 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
class AppRegisterContent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  //REGISTER FUNCTION
  handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirm_pass= e.target.confirm_pass.value;
    // const data = {
    //   email: email,
    //   phone: phone,
    //   password: password,
    //   username: username
    // }
    // this.props.register(data);
    //set loadng to true
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);

    //password verification
    if( password != confirm_pass ){
      setTimeout(() => {
      const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: 'Password does not match!',
          icon: 'error',
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
      }, 2000);
    }else {
      setTimeout(() => {
        const MySwal = withReactContent(Swal)
          MySwal.fire({
            title: 'Successfully registered!',
            icon: 'success',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          }).then(() => {
            localStorage.setItem('email', email);
            localStorage.setItem('phone', phone);
            localStorage.setItem('password', password);
          })
        }, 2000)
    }
  }
  render(){
    return(
      <div className="AppRegisterContent" data-testid="AppRegisterContent">
        <div className="">
          <div className='register-form-container'>
            <div className="form-group text-uppercase">
              <h1 className='text-danger'>Register</h1>
            </div>
            <form onSubmit={this.handleRegister}>
              <hr className='text-white'></hr>
              <center className='mt-4'>
                <div className="form-group mb-3 register-inputs">
                  <input type="email" className="form-control" id="email" placeholder="Email" name="email" required />
                </div>
                <div className="form-group mb-3 register-inputs">
                  <input type="text" pattern='(\+?\d{2}?\s?\d{3}\s?\d{3}\s?\d{4})|([0]\d{3}\s?\d{3}\s?\d{4})' maxLength={11} className="form-control" id="phone" name="phone" placeholder="09XXXXxxxxx" required />
                </div>
                <div className="form-group mb-3 register-inputs">
                  <input type="password" className="form-control" id="pwd" placeholder="Password" name="password" required />
                </div>
                <div className="form-group mb-3 register-inputs">
                  <input type="password" className="form-control" id="pwd2" placeholder="Confirm password" name="confirm_pass"  required />
                </div>
                <div className="mb-3 text-white">
                  <input type="checkbox" className="form-check-input me-2 checkbox" id="checkbox" required />
                  <label className="form-check-label" htmlFor="checkbox">I agree to the <a href="#" className="text-white">terms and conditions</a></label>
                </div>
                <div className="form-group w-100 mb-3">
                  <button className='btn btn-danger btn-lg w-100 rounded-5' >
                  {
                    this.state.loading == true ? <div className='spinner-border spinner-border-sm' role='status'></div> : 'Get started'
                  }
                  </button>
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
