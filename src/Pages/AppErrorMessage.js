import React from 'react';

import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';

import error404  from './../images/404.png';

class AppErrorMessage extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
          <div className="AppErrorMessage" style={AppErrorMessageStyle}>
            <img src={error404} alt="error404" width='500px'></img>
          </div>
        <AppFooter></AppFooter>
      </>
    );
  }
}

const AppErrorMessageStyle = {
  minHeight: '89vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
// min-height: 100vh;
// margin-top: 50px;
// display: flex;
// flex-direction: column;
// justify-content: start;
// align-items: center;
export default AppErrorMessage;