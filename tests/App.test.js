const React = require('react');
const { render, screen } = require('@testing-library/react');
const { default: App } = require('../src/App.js');

test('renders two main images', () => {
  render(<App />);

  const mainImages = screen.getAllByRole('goohogger-image');
  expect(mainImages).toHaveLength(2);
});
