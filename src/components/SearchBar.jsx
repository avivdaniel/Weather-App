import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import { getFiveDayWeatherAsync } from '@/redux/cityForecastSlice';
import {getCityOptions} from '@/home/service';

const DEFAULT_CITY = 'Tel Aviv';

const SearchBar = ({}) => {
  const dispatch = useDispatch();

  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

useEffect(()=> {
  (async () => {
    const [defalutCityOption] = await getCityOptions(DEFAULT_CITY);

    // let defalutCityOption = {
    //   "Version": 1,
    //   "Key": "215854",
    //   "Type": "City",
    //   "Rank": 31,
    //   "LocalizedName": "Tel Aviv",
    //   "Country": {
    //   "ID": "IL",
    //     "LocalizedName": "Israel"
    // },
    //   "AdministrativeArea": {
    //   "ID": "TA",
    //     "LocalizedName": "Tel Aviv"
    // }}

    setSelectedCity({label:defalutCityOption?.LocalizedName, value: defalutCityOption?.Key})

    dispatch(getFiveDayWeatherAsync({
      locationKey: defalutCityOption?.Key,
      localizedName: defalutCityOption?.LocalizedName
    }))
  })();
}, []);

  const debounceFetchCityOptions = debounce(async (inputText, cb) => {
  setLoading(true);
  try {
  const data = await getCityOptions(inputText);
  //   const data = [
  //     {
  //       "Version": 1,
  //       "Key": "178087",
  //       "Type": "City",
  //       "Rank": 10,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "DE",
  //         "LocalizedName": "Germany"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "BE",
  //         "LocalizedName": "Berlin"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "334472",
  //       "Type": "City",
  //       "Rank": 65,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "US",
  //         "LocalizedName": "United States"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "NH",
  //         "LocalizedName": "New Hampshire"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "111584",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "CO",
  //         "LocalizedName": "Colombia"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "TOL",
  //         "LocalizedName": "Tolima"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "111585",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "CO",
  //         "LocalizedName": "Colombia"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "TOL",
  //         "LocalizedName": "Tolima"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "111738",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "CO",
  //         "LocalizedName": "Colombia"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "VAU",
  //         "LocalizedName": "Vaupés"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "111888",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "CR",
  //         "LocalizedName": "Costa Rica"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "A",
  //         "LocalizedName": "Alajuela"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "220397",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "JM",
  //         "LocalizedName": "Jamaica"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "11",
  //         "LocalizedName": "Saint Elizabeth"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "131206",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "SV",
  //         "LocalizedName": "El Salvador"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "US",
  //         "LocalizedName": "Usulután"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "2174864",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "US",
  //         "LocalizedName": "United States"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "NJ",
  //         "LocalizedName": "New Jersey"
  //       }
  //     },
  //     {
  //       "Version": 1,
  //       "Key": "336534",
  //       "Type": "City",
  //       "Rank": 75,
  //       "LocalizedName": "Berlin",
  //       "Country": {
  //         "ID": "US",
  //         "LocalizedName": "United States"
  //       },
  //       "AdministrativeArea": {
  //         "ID": "WI",
  //         "LocalizedName": "Wisconsin"
  //       }
  //     }
  //   ]

  cb(data.map((city) => ({label: `${city?.LocalizedName} - ${city?.Country?.LocalizedName}`, value: city?.Key})))
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
}, 1000)

const handleChange = selectedCityOption => {
  setSelectedCity(selectedCityOption);
  dispatch(getFiveDayWeatherAsync({
    localizedName: selectedCityOption.label,
    locationKey: selectedCityOption.value
  }));
}

  return (
    <AsyncSelect
      cacheOptions
      value={selectedCity}
      placeholder='Type something...'
      loadOptions={debounceFetchCityOptions}
      onChange={handleChange}
      loading={loading}
    />
  );
};

export default SearchBar;