import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppPasswordResetContent from '../components/AppPasswordResetContent/AppPasswordResetContent';
import React from 'react';

class AppLogin extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
        <AppPasswordResetContent></AppPasswordResetContent>
        <AppFooter></AppFooter>
      </>
    );
  }
}

export default AppLogin;