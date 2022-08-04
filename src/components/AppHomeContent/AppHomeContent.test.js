import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppHomeContent from './AppHomeContent';

describe('<AppHomeContent />', () => {
  test('it should mount', () => {
    render(<AppHomeContent />);
    
    const appHomeContent = screen.getByTestId('AppHomeContent');

    expect(appHomeContent).toBeInTheDocument();
  });
});