import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {soundManager} from "soundmanager2"
soundManager.setup({ignoreMobileRestrictions: true, debugMode: false})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
