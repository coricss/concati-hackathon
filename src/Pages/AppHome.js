import React from 'react';

import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppHomeContent from '../components/AppHomeContent/AppHomeContent';

class AppHome extends React.Component {
  render() {
    return (
      <div>
        <AppHeader></AppHeader>
        <AppHomeContent></AppHomeContent>
        <AppFooter></AppFooter>
      </div>
    );
  }
}

export default AppHome;