import React from 'react';
import PropTypes from 'prop-types';
import './AppSendMessageContent.css';
import logo from '../../images/TellMe-logo.png';

import { useParams } from 'react-router';

function withParams(Component) {
  return props => <Component {...props} params={useParams()}/>;
}

class AppSendMessageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      loading: false,
      alertMessage: ''
    }
  }

  handleSend = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    // const data = {
    //   message: message,
    //   username: this.props.params.username,
    //   receiver: this.props.params.receiver,
    // }
    // this.props.sendMessage(data);
    
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);

    if(message!="" && message!=null){
      this.setState({
        sent: true,
        alertMessage: 'Your message has been sent!'

      });
      setTimeout(() => {
        this.setState({
          sent: false,
         
        });
      }, 2000);
    }
    
  }

  render(){
    return(
      <div className="AppSendMessageContent" data-testid="AppSendMessageContent">
        <a className="navbar-brand" href="/">
          <div className='d-flex align-items-center'>
            <img src={ logo } alt="Keep logo" width='45px' />
            <h2 className='fw-bold text-danger ms-2 m-0'>Tell {this.props.params.username}</h2>
          </div>
        </a>
        <div className="AppSendMessageContent__messages text-white">
          <hr/>
          <form onSubmit={this.handleSend}>
            <div className="AppSendMessageContent__messages__body">
              {
                this.state.sent == true
                ? <div class="alert alert-success alert-dismissible fade show w-100 mx-0" role="alert">
                    <small>{this.state.alertMessage}</small>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={this.resetAlert}></button>
                  </div>
                : null
              }
              <div className="AppSendMessageContent__messages__body__message">
                <textarea className='w-100 rounded-5' maxLength={200} minLength={10} placeholder='Type your message here..' name="message" required></textarea>
              </div>
            </div>
            <div className="AppSendMessageContent__messages__footer">
              <div className="AppSendMessageContent__messages__footer__send mt-2 mb-2">
                <button className='btn btn-danger rounded-5 w-100 btn-lg'>
                  {
                    this.state.loading == true ? <div className='spinner-border spinner-border-sm' role='status'></div> : 'Send'
                  }
                </button>
              </div>
              <small className='text-white'>Create your own link<a href='/register' className='text-danger fw-bold text-decoration-none'> here</a></small>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

AppSendMessageContent.propTypes = {};

AppSendMessageContent.defaultProps = {};

export default withParams(AppSendMessageContent);
