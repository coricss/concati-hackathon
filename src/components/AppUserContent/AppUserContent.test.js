import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppUserContent from './AppUserContent';

describe('<AppUserContent />', () => {
  test('it should mount', () => {
    render(<AppUserContent />);
    
    const appUserContent = screen.getByTestId('AppUserContent');

    expect(appUserContent).toBeInTheDocument();
  });
});