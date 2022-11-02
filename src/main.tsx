import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { register } from './registerSW';
import './index.css';

// register();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />,
    </React.StrictMode>,
);
