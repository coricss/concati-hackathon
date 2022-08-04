import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppLoginContent from './AppLoginContent';

describe('<AppLoginContent />', () => {
  test('it should mount', () => {
    render(<AppLoginContent />);
    
    const appLoginContent = screen.getByTestId('AppLoginContent');

    expect(appLoginContent).toBeInTheDocument();
  });
});