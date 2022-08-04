import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppPasswordResetContent from './AppPasswordResetContent';

describe('<AppPasswordResetContent />', () => {
  test('it should mount', () => {
    render(<AppPasswordResetContent />);
    
    const appPasswordResetContent = screen.getByTestId('AppPasswordResetContent');

    expect(appPasswordResetContent).toBeInTheDocument();
  });
});