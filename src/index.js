import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const places = [
  {
    title: `Beautiful &amp; luxurious apartment at great location`
  },
  {
    title: `Wood and stone place`
  },
  {
    title: `Canal View Prinsengracht`
  },
  {
    title: `Nice, cozy, warm big bed apartment`
  },
];

ReactDOM.render(
    <App places={places}/>,
    document.querySelector(`#root`)
);

