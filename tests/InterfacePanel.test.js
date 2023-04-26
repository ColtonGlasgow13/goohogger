const React = require('react');
const { render, screen, cleanup } = require('@testing-library/react');
const { default: InterfacePanel } = require('../src/InterfacePanel.js');
import userEvent from '@testing-library/user-event';

// Clean up after each test
afterEach(cleanup);


test('Interface panel starts in login mode', () => {
  const { getByText } = render(<InterfacePanel/>);

  const title = getByText(/Who are you?/);
  const submitButton = screen.getByRole('button', { name: 'Or create an account' });

  expect(title).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});


test('Interface panel swaps between signin and login', async() => {
    render(<InterfacePanel/>);
  
    const submitButton = screen.getByRole('button', { name: 'Or create an account' });

    await userEvent.click(submitButton);

    expect(submitButton.textContent).toBe('Or sign in')
  });