import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppRegisterContent from '../components/AppRegisterContent/AppRegisterContent';
import React from 'react';

class AppRegister extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
        <AppRegisterContent></AppRegisterContent>
        <AppFooter></AppFooter>
      </>
    );
  }
}

export default AppRegister;