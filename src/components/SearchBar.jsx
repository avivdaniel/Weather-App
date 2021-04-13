import React, { useState } from 'react';
import Select from 'react-select'

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [cityOptions, setCityOptions] = useState([]);


  return (
    <Select
      onInputChange={(value) => setValue(value)}
    />
  );
};

export default SearchBar;