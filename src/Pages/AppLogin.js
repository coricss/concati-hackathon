import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppLoginContent from '../components/AppLoginContent/AppLoginContent';
import React from 'react';

class AppLogin extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
        <AppLoginContent></AppLoginContent>
        <AppFooter></AppFooter>
      </>
    );
  }
}

export default AppLogin;