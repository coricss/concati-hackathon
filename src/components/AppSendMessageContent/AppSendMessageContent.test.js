import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppSendMessageContent from './AppSendMessageContent';

describe('<AppSendMessageContent />', () => {
  test('it should mount', () => {
    render(<AppSendMessageContent />);
    
    const appSendMessageContent = screen.getByTestId('AppSendMessageContent');

    expect(appSendMessageContent).toBeInTheDocument();
  });
});