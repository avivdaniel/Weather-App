import {lazy} from 'react';

export const path = '/favorites';
export const title = 'Favorites';
export const exact = true;
export const component = lazy(()=> import('./Favorites.jsx'))