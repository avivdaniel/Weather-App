import React from 'react';
import { render } from 'react-dom';

import './fonts.css';
import './style.css';
import App from './App.jsx';

const root = document.createElement('div');
document.body.appendChild(root);
document.body.classList.add('min-h-screen');
document.body.classList.add('bg-app');

render(<App />, root);
