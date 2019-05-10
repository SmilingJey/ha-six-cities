import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import places from './mocks/offers.js';

ReactDOM.render(
    <App places={places}/>,
    document.querySelector(`#root`)
);

