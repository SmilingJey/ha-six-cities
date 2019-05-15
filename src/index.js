import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import places from './mocks/offers.js';
import cities from './mocks/cities.js';

ReactDOM.render(
    <App
      places={places}
      cities={cities}
    />,
    document.querySelector(`#root`)
);

