import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppRegisterContent from './AppRegisterContent';

describe('<AppRegisterContent />', () => {
  test('it should mount', () => {
    render(<AppRegisterContent />);
    
    const appRegisterContent = screen.getByTestId('AppRegisterContent');

    expect(appRegisterContent).toBeInTheDocument();
  });
});