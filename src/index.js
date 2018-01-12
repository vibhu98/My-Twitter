import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPage from './SearchPage';
import HomePage from './HomePage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
