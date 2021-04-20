import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import AsyncSelect from 'react-select/async';

import { getFiveDayWeatherAsync } from '@/redux/cityForecastSlice';
import { getCityOptions } from '@/home/service';
import { cleanErrors, receiveErrors } from '@/redux/errorsSlice';

const DEFAULT_CITY = 'Tel Aviv';

const SearchBar = ({}) => {
  const dispatch = useDispatch();

  const [selectedCity, setSelectedCity] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        dispatch(cleanErrors());
        const [defaultCityOption] = await getCityOptions(DEFAULT_CITY);

        setSelectedCity({
          label: defaultCityOption?.LocalizedName,
          value: defaultCityOption?.Key,
        });

        dispatch(
          getFiveDayWeatherAsync({
            locationKey: defaultCityOption?.Key,
            localizedName: defaultCityOption?.LocalizedName,
          })
        );
      } catch (error) {
        dispatch(
          receiveErrors({
            error: error.message,
          })
        );
        console.error(error);
      }
      setLoading(false);
    })();
  }, []);

  const debounceFetchCityOptions = debounce(async (inputText, cb) => {
    try {
      dispatch(cleanErrors());
      setLoading(true);
      const data = await getCityOptions(inputText);
      cb(
        data.map((city) => ({
          label: city?.LocalizedName,
          value: city?.Key,
        }))
      );
    } catch (error) {
      dispatch(
        receiveErrors({
          error: error.message,
        })
      );
      console.error(error);
    }
    setLoading(false);
  }, 1000);

  const handleChange = (selectedCityOption) => {
    if (!selectedCityOption) return;
    setSelectedCity(selectedCityOption);
    dispatch(
      getFiveDayWeatherAsync({
        localizedName: selectedCityOption.label,
        locationKey: selectedCityOption.value,
      })
    );
  };

  return (
    <div className="container mx-auto">
      <AsyncSelect
        cacheOptions
        value={selectedCity}
        className="p-4"
        placeholder="Type something..."
        loadOptions={debounceFetchCityOptions}
        onChange={handleChange}
        loading={loading}
      />
    </div>
  );
};

export default SearchBar;
