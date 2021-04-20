import React from 'react';
import { render } from 'react-dom';

import './fonts.css';
import './style.css';
import App from './App.jsx';

const root = document.createElement('div');
root.classList.add('flex');
root.classList.add('flex-col');
root.classList.add('min-h-screen');
root.classList.add('overflow-hidden');
root.classList.add('w-full');
document.body.appendChild(root);
document.body.classList.add('bg-app');

render(<App />, root);
