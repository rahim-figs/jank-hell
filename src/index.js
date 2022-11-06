import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { H } from 'highlight.run';
import { ErrorBoundary } from '@highlight-run/react';

H.init(process.env.REACT_APP_HIGHLIGHT_ID);

ReactDOM.render(
  <ErrorBoundary showDialog>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
