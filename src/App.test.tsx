import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router';

describe('App', () => {
  it('renders the header', () => {
    render(<App />, { wrapper: BrowserRouter });

    const header = screen.getByText('Soar.inc');

    expect(header).toBeInTheDocument();
  });
});
