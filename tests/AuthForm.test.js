const React = require('react');
const { render, screen, cleanup } = require('@testing-library/react');
const { default: AuthForm } = require('../src/components/AuthForm/AuthForm.js');
import userEvent from '@testing-library/user-event';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Clean up after each test
afterEach(cleanup);


jest.mock('firebase/auth', () => {
  const originalModule = jest.requireActual('firebase/auth');

  return {
    ...originalModule,
    signInWithEmailAndPassword: jest.fn(),
  };
});


test('AuthForm should have the correct className', () => {
  const { container } = render(<AuthForm mode="test"/>);
  const authForm = container.querySelector('.test-form');

  expect(authForm).toBeInTheDocument();
  expect(authForm.className).toBe('test-form');
});


test('signIn mode shows correct title', () => {
  const { getByText } = render(<AuthForm mode="signIn" title="Who are you?" />);

  const title = getByText(/Who are you?/);
  expect(title).toBeInTheDocument();
});


test('signUp mode shows correct title', () => {
    const { getByText } = render(<AuthForm mode="signUp" title="Who are you?" />);
  
    const title = getByText(/Who are you?/);
    expect(title).toBeInTheDocument();
});


test('submit button has the right text and calls handling function on login', async() => {
  const handleClick = jest.fn();

  render(<AuthForm onSignIn={handleClick} mode="signIn" title="Who are you?"/>);

  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const submitButton = screen.getByRole('button', { name: 'Sign In' });

  // Check that the button has the right text
  expect(submitButton).toBeInTheDocument();

  // Fill in the form
  await userEvent.type(emailInput, 'test@example.com');
  await userEvent.type(passwordInput, 'password123');

  // Click the button and check if the handling function is called
  await userEvent.click(submitButton);
  
  // Check if signInWithEmailAndPassword was called with the correct data
  expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
    expect.anything(), // Here, we are not concerned with the auth instance, so we use expect.anything()
    'test@example.com',
    'password123'
  );
});