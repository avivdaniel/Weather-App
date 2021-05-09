import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import AsyncSelect from 'react-select/async';
import { useSelector } from 'react-redux';

import {
  getFiveDayWeatherAsync,
  getCurrentWeatherAsync,
} from '@/redux/cityForecastSlice';
import { getCityOptions } from '@/home/service';
import { cleanErrors, receiveErrors } from '@/redux/errorsSlice';

const DEFAULT_CITY = 'Tel Aviv';
const NO_OPTIONS_MSG = 'Sorry, not found any options';
const NO_OPTION_2_CHARS_MSG = 'Sorry, plase type at least 2 letters';

const SearchBar = ({}) => {
  const dispatch = useDispatch();

  const { locationKey } = useSelector((state) => state.cityForecast);

  const [selectedCity, setSelectedCity] = useState({});
  const [loading, setLoading] = useState(false);
  const [noOptionMessage, setNoOptionMessage] = useState(NO_OPTIONS_MSG);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        dispatch(cleanErrors());

        if (!locationKey) {
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

          dispatch(
            getCurrentWeatherAsync({
              locationKey: defaultCityOption?.Key,
            })
          );
        }
        setLoading(false);
      } catch (error) {
        dispatch(
          receiveErrors({
            error: error.message,
          })
        );
        console.error(error);
        setLoading(false);
      }
    })();
  }, [dispatch]);

  const debounceFetchCityOptions = debounce(async (inputText, cb) => {
    if (inputText.length > 1) {
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
        setNoOptionMessage(NO_OPTIONS_MSG);
      } catch (error) {
        dispatch(
          receiveErrors({
            error: error.message,
          })
        );
        console.error(error);
      }
      setLoading(false);
    } else {
      setNoOptionMessage(NO_OPTION_2_CHARS_MSG);
      cb();
    }
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
    dispatch(
      getCurrentWeatherAsync({
        locationKey: selectedCityOption.value,
      })
    );
  };

  return (
    <div className="container mx-auto">
      <AsyncSelect
        cacheOptions
        className="p-4"
        placeholder="Type something..."
        loadOptions={debounceFetchCityOptions}
        onChange={handleChange}
        loading={loading}
        noOptionsMessage={() => noOptionMessage}
      />
    </div>
  );
};

export default SearchBar;
