import React from 'react';
import PropTypes from 'prop-types';
import './AppSendMessageContent.css';
import logo from '../../images/TellMe-logo.png';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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
      alertMessage: '',
    }
  }


  handleSend = (e) => {
    e.preventDefault();

    let username=e.target.username.value;

    let messages = localStorage.getItem(username)? JSON.parse(localStorage.getItem(username)):[];

    // console.log(messages);


    //get date now
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric',minute:'numeric' };
    const d= new Date();
    const datenow = d.toLocaleDateString("en-US", options);
    console.log(datenow);
    const message ={
        text:e.target.message.value,
        timeAgo:datenow
    } 

    // messages = ['asdadsasd','22222222','333333333']
    messages.push(message);
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


      localStorage.setItem(username, JSON.stringify(messages));

      this.setState({
        sent: true,
        alertMessage: 'Your message has been sent!'



      });
      setTimeout(() => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: 'Your message has been sent',
          icon: 'success',
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          window.location.reload();
        })
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

            <input type="hidden" name="username" id="username" value ={this.props.params.username}/>
            <div className="AppSendMessageContent__messages__body">
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
