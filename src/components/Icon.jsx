import React from 'react';
import icons from '../assets/icons.js';

const Icon = ({number, ...props}) => {
  const Component = icons[number];
  return Component ? <Component {...props}/> : null;
};

export default Icon;