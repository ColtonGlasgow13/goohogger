const React = require('react');
const { render, screen, fireEvent, cleanup } = require('@testing-library/react');
const { default: AuthForm } = require('../src/AuthForm.js');

// Clean up after each test
afterEach(cleanup);


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