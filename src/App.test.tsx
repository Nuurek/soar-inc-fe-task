import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the header', () => {
    render(<App />);

    const header = screen.getByText('Soar.inc');

    expect(header).toBeInTheDocument();
  });
});
