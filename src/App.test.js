import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router, Route} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(<Router>
    <Route path="/" component={App}/>
  </Router>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const linkHomeElement = getByText(/Home/i);
  expect(linkHomeElement).toBeInTheDocument();
  const linkAboutElement = getByText(/About/i);
  expect(linkAboutElement).toBeInTheDocument();
});
