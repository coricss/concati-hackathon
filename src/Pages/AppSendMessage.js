import AppHeader from '../components/AppHeader/AppHeader';
import AppFooter from '../components/AppFooter/AppFooter';
import AppSendMessageContent from '../components/AppSendMessageContent/AppSendMessageContent';
import React from 'react';

class AppSendMessage extends React.Component {
  render() {
    return (
      <>
        <AppHeader></AppHeader>
        <AppSendMessageContent></AppSendMessageContent>
        <AppFooter></AppFooter>
      </>
    );
  }
}

export default AppSendMessage;