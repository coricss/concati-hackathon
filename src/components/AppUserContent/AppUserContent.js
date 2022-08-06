import React from 'react';
import PropTypes from 'prop-types';
import './AppUserContent.css';

import {
  FaCopy,
  FaTrash
} from 'react-icons/fa';


function URLText () {
  return <>{window.location.host+'/user/'+localStorage.getItem('username')}</>;
}

class AppMessages extends React.Component {
  render() {
    return(
      <div className="AppUserContent__messages__message px-5 py-4 rounded-5 text-start mb-3">
        <div className="AppUserContent__messages__message__body">
          <h6>
            { this.props.message }
          </h6>
          <div className='d-flex justify-content-between align-items-center'>
            <small className='text-muted me-3'>{ this.props.timeAgo }</small>
            <FaTrash className='text-danger' style={{cursor: 'pointer'}}></FaTrash>
          </div>
        </div>
      </div>
    )
  }
}
class AppUserContent extends React.Component {

  //Data for messages

  username = localStorage.getItem('username');

  messages = localStorage.getItem(this.username)? JSON.parse(localStorage.getItem(this.username)):[];


  // messages = [
  //   {
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  //     timeAgo: '12:00 am'
  //   },
  //   {
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  //     timeAgo: '12:00 am'
  //   },
  //   {
  //     text: 'Lorem asdasdasd',
  //     timeAgo: '12:00 pm'
  //   }
  // ];

  constructor (props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 2000);
  }

  sentMessages = () => {
    this.messagesArray = this.messages.reverse().map((message) => 
      <AppMessages message={message.text} timeAgo={message.timeAgo} />
    );
    if( this.messages.length === 0 ){
      return <p className='text-danger fs-5'>No messages yet</p>
    }else{
      return this.messagesArray;
    }
  
  }

  userCheck = () => {
    if(localStorage.getItem('isLogin') == 'true'){
      return true;
    }
    window.location.href = '/login';
  }

  handleCopyText = () => {
    navigator.clipboard.writeText(document.getElementById('copy-text').innerText);
    document.getElementById('alert-copy').classList.remove('opacity-0');
    document.getElementById('btn-link').classList.remove('border-danger');
    document.getElementById('btn-link').classList.add('border-success');
    document.getElementById('link-icon').classList.remove('text-danger');
    document.getElementById('link-icon').classList.add('text-success');
    setTimeout(() => {
      document.getElementById('alert-copy').classList.add('opacity-0');
      document.getElementById('btn-link').classList.add('border-danger');
      document.getElementById('link-icon').classList.add('text-danger');
    }, 2000);
  }

  render(){
    this.userCheck();
   
    return(
      <div className="AppUserContent" data-testid="AppUserContent">
        <div className="AppUserContent__header text-danger">
          <h1>Hello {localStorage.getItem('username')}!</h1>
        </div>
        <small className='text-white mb-2'>Click your link below and share to receive messages from other people.</small>
        <div className="AppUserContent__link">
          <button onClick={this.handleCopyText} id="btn-link" className="user-link-container text-white border border-danger border-2 rounded-5 d-flex align-items-center justify-content-between p-3">
            <p className='m-0' id="copy-text">
              <URLText></URLText>
            </p>
            <div className="user-link-icon text-danger p-1" id='link-icon'>
              <FaCopy size={20}></FaCopy>
            </div>
          </button>
          <small className='text-success mt-1 opacity-0' id='alert-copy'>Copied to clipboard</small>
        </div>
        <div className='w-50 text-white mt-4 '>
          <h6>Latest messages</h6>
          <hr />
        </div>
        <div className="AppUserContent__messages w-50 text-white p-2">
         {
           this.state.isLoading != false
           ? <div className='spinner-border spinner-border-sm' role='status'></div>
            : <>{ this.sentMessages()}</>
         }
        </div>
      </div>
    )
  }
  
}

AppUserContent.propTypes = {};

AppUserContent.defaultProps = {};

export default AppUserContent;
