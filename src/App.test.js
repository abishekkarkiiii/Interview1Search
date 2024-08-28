import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import { describe, test, expect, jest } from '@jest/globals'; 


jest.mock('axios');

describe('App Component', () => {

  test('renders user names after successful API call', async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
      ]
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });
  });

  test('displays error message when API call fails', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch users.'));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch users./i)).toBeInTheDocument();
    });
  });
});
