import React from 'react';
import ReactDOM from 'react-dom';

import App from '@app/containers/App';

import './assets/styles/global.scss';
import globalStyles from './assets/styles/global.scss';

const rootContainer = document.getElementById('root');
rootContainer && rootContainer.setAttribute('class', globalStyles.root);
ReactDOM.render(<App />, rootContainer);
