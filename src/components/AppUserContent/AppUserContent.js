import React from 'react';
import PropTypes from 'prop-types';
import './AppUserContent.css';

import {
  FaCopy,
  FaTrash
} from 'react-icons/fa';

import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';



function withParams(Component) {
  return props => <Component {...props} params={useParams()}/>;
}

function URLText () {
  const location = useLocation();
  return <>{window.location.host+location.pathname}</>;
}

class AppUserContent extends React.Component {
  constructor (props) {
    super(props);
  }


  handleCopyText = () => {
    navigator.clipboard.writeText(document.getElementById('copy-text').innerText);
    document.getElementById('alert-copy').classList.remove('d-none');
    document.getElementById('btn-link').classList.remove('border-danger');
    document.getElementById('btn-link').classList.add('border-success');
    document.getElementById('link-icon').classList.remove('text-danger');
    document.getElementById('link-icon').classList.add('text-success');
    setTimeout(() => {
      document.getElementById('alert-copy').classList.add('d-none');
      document.getElementById('btn-link').classList.add('border-danger');
      document.getElementById('link-icon').classList.add('text-danger');
    }, 2000);
  }

  render(){
    console.log();
    return(
      <div className="AppUserContent" data-testid="AppUserContent">
        <div className="AppUserContent__header text-danger">
          <h1>Hello {this.props.params.username}!</h1>
        </div>
        <small className='text-white mb-2'>You can receive messages from other people by clicking on the link below.</small>
        <div className="AppUserContent__link">
          <button onClick={this.handleCopyText} id="btn-link" className="user-link-container text-white border border-danger border-2 rounded-5 d-flex align-items-center justify-content-start p-3">
            <div className="user-link-icon text-danger me-2 p-1" id='link-icon'>
              <FaCopy size={20}></FaCopy>
            </div>
            <p className='m-0' id="copy-text">
              <URLText></URLText>
            </p>
          </button>
          <small className='text-success mt-1 d-none' id='alert-copy'>Copied to clipboard</small>
        </div>
        <div className="AppUserContent__messages mt-5 w-50 text-white">
          <h6>Received Messages</h6>
          <hr />
          <div className="AppUserContent__messages__message border px-5 py-4 rounded-5 text-start mb-3">
            <div className="AppUserContent__messages__message__body">
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima sint iusto eos labore maiores nemo doloremque, quibusdam vitae quam.
              </h6>
              <div className='d-flex justify-content-between'>
                <small className='text-muted me-3'>{new Date().toLocaleTimeString()}</small>
                <FaTrash className='text-danger' style={{cursor: 'pointer'}}></FaTrash>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

AppUserContent.propTypes = {};

AppUserContent.defaultProps = {};

export default withParams(AppUserContent);
