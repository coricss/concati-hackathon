import React from 'react';

import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppUserContent from '../components/AppUserContent/AppUserContent';

class AppUser extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
          <AppUserContent></AppUserContent>
        <AppFooter></AppFooter>
      </>
    );
  }
}

export default AppUser;