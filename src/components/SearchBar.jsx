import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { getCityOptions } from '@/services/services';

const SearchBar = ({query, setQuery, cityOptions, setCityOptions}) => {

  return (
    <Select
      onInputChange={(query) => setQuery(query)}
    />
  );
};

export default SearchBar;