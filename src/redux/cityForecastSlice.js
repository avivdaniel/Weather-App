import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {apiKey} from '@/config';
import accuWeatherApi from '@/client';
import {getCurrentWeather} from '@/favorites/service';
import { getFiveDayWeather } from '@/home/service';

export const getFiveDayWeatherAsync = createAsyncThunk('cityForecast/getFiveDayWeatherAsync', async({locationKey, localizedName})=> {
  try {
    const {DailyForecasts:days} = await getFiveDayWeather(locationKey);
    // const { data: {DailyForecasts: days} } = await accuWeatherApi.get(`/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${true}`);

    // const  days = [
    //        {
    //          "Date": "2021-04-15T07:00:00+03:00",
    //          "EpochDate": 1618459200,
    //          "Temperature": {
    //            "Minimum": {
    //              "Value": 16.5,
    //              "Unit": "C",
    //              "UnitType": 17
    //            },
    //            "Maximum": {
    //              "Value": 26.0,
    //              "Unit": "C",
    //              "UnitType": 17
    //            }
    //          },
    //          "Day": {
    //            "Icon": 6,
    //            "IconPhrase": "Mostly cloudy",
    //            "HasPrecipitation": false
    //          },
    //          "Night": {
    //            "Icon": 35,
    //            "IconPhrase": "Partly cloudy",
    //            "HasPrecipitation": false
    //          },
    //          "Sources": [
    //            "AccuWeather"
    //          ],
    //          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    //          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    //        },
    //        {
    //          "Date": "2021-04-16T07:00:00+03:00",
    //          "EpochDate": 1618545600,
    //          "Temperature": {
    //            "Minimum": {
    //              "Value": 17.4,
    //              "Unit": "C",
    //              "UnitType": 17
    //            },
    //            "Maximum": {
    //              "Value": 26.3,
    //              "Unit": "C",
    //              "UnitType": 17
    //            }
    //          },
    //          "Day": {
    //            "Icon": 1,
    //            "IconPhrase": "Sunny",
    //            "HasPrecipitation": false
    //          },
    //          "Night": {
    //            "Icon": 34,
    //            "IconPhrase": "Mostly clear",
    //            "HasPrecipitation": false
    //          },
    //          "Sources": [
    //            "AccuWeather"
    //          ],
    //          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    //          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
    //        },
    //        {
    //          "Date": "2021-04-17T07:00:00+03:00",
    //          "EpochDate": 1618632000,
    //          "Temperature": {
    //            "Minimum": {
    //              "Value": 18.2,
    //              "Unit": "C",
    //              "UnitType": 17
    //            },
    //            "Maximum": {
    //              "Value": 27.6,
    //              "Unit": "C",
    //              "UnitType": 17
    //            }
    //          },
    //          "Day": {
    //            "Icon": 2,
    //            "IconPhrase": "Mostly sunny",
    //            "HasPrecipitation": false
    //          },
    //          "Night": {
    //            "Icon": 34,
    //            "IconPhrase": "Mostly clear",
    //            "HasPrecipitation": false
    //          },
    //          "Sources": [
    //            "AccuWeather"
    //          ],
    //          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    //          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
    //        },
    //        {
    //          "Date": "2021-04-15T07:00:00+03:00",
    //          "EpochDate": 1618459200,
    //          "Temperature": {
    //            "Minimum": {
    //              "Value": 16.5,
    //              "Unit": "C",
    //              "UnitType": 17
    //            },
    //            "Maximum": {
    //              "Value": 26.0,
    //              "Unit": "C",
    //              "UnitType": 17
    //            }
    //          },
    //          "Day": {
    //            "Icon": 6,
    //            "IconPhrase": "Mostly cloudy",
    //            "HasPrecipitation": false
    //          },
    //          "Night": {
    //            "Icon": 35,
    //            "IconPhrase": "Partly cloudy",
    //            "HasPrecipitation": false
    //          },
    //          "Sources": [
    //            "AccuWeather"
    //          ],
    //          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    //          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    //        },
    //        {
    //          "Date": "2021-04-19T07:00:00+03:00",
    //          "EpochDate": 1618804800,
    //          "Temperature": {
    //            "Minimum": {
    //              "Value": 25.5,
    //              "Unit": "C",
    //              "UnitType": 17
    //            },
    //            "Maximum": {
    //              "Value": 34.9,
    //              "Unit": "C",
    //              "UnitType": 17
    //            }
    //          },
    //          "Day": {
    //            "Icon": 4,
    //            "IconPhrase": "Intermittent clouds",
    //            "HasPrecipitation": false
    //          },
    //          "Night": {
    //            "Icon": 35,
    //            "IconPhrase": "Partly cloudy",
    //            "HasPrecipitation": false
    //          },
    //          "Sources": [
    //            "AccuWeather"
    //          ],
    //          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    //          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
    //        }
    //      ]
    return {
      localizedName,
       days,
       locationKey,
     };
  } catch (err) {
    throw new Error(err)
  }
});

export const getCurrentWeatherAsync = createAsyncThunk('cityForecasr/getCurrentWeatherAsync', async({locationKey})=> {
  try {
  // const [currentWeather] = await getCurrentWeather(locationKey);
    const [currentWeather] = [
      {
        "LocalObservationDateTime": "2021-04-18T19:17:00+02:00",
        "EpochTime": 1618766220,
        "WeatherText": "Light rain",
        "WeatherIcon": 12,
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "IsDayTime": true,
        "Temperature": {
          "Metric": {
            "Value": 9.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Metric": {
            "Value": 9.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperatureShade": {
          "Metric": {
            "Value": 9.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RelativeHumidity": 77,
        "IndoorRelativeHumidity": 40,
        "DewPoint": {
          "Metric": {
            "Value": 6,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 43,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Wind": {
          "Direction": {
            "Degrees": 68,
            "Localized": "ENE",
            "English": "ENE"
          },
          "Speed": {
            "Metric": {
              "Value": 6.6,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 4.1,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "WindGust": {
          "Speed": {
            "Metric": {
              "Value": 11.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 7.2,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "UVIndex": 0,
        "UVIndexText": "Low",
        "Visibility": {
          "Metric": {
            "Value": 16.1,
            "Unit": "km",
            "UnitType": 6
          },
          "Imperial": {
            "Value": 10,
            "Unit": "mi",
            "UnitType": 2
          }
        },
        "ObstructionsToVisibility": "",
        "CloudCover": 82,
        "Ceiling": {
          "Metric": {
            "Value": 5822,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 19100,
            "Unit": "ft",
            "UnitType": 0
          }
        },
        "Pressure": {
          "Metric": {
            "Value": 1019.4,
            "Unit": "mb",
            "UnitType": 14
          },
          "Imperial": {
            "Value": 30.1,
            "Unit": "inHg",
            "UnitType": 12
          }
        },
        "PressureTendency": {
          "LocalizedText": "Rising",
          "Code": "R"
        },
        "Past24HourTemperatureDeparture": {
          "Metric": {
            "Value": -1.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": -3,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "ApparentTemperature": {
          "Metric": {
            "Value": 12.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 55,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WindChillTemperature": {
          "Metric": {
            "Value": 9.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 49,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WetBulbTemperature": {
          "Metric": {
            "Value": 8,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 46,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Precip1hr": {
          "Metric": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PrecipitationSummary": {
          "Precipitation": {
            "Metric": {
              "Value": 0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "PastHour": {
            "Metric": {
              "Value": 0,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past3Hours": {
            "Metric": {
              "Value": 0.5,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.02,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past6Hours": {
            "Metric": {
              "Value": 1,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.04,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past9Hours": {
            "Metric": {
              "Value": 4.7,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.18,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past12Hours": {
            "Metric": {
              "Value": 4.7,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.18,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past18Hours": {
            "Metric": {
              "Value": 4.9,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.19,
              "Unit": "in",
              "UnitType": 1
            }
          },
          "Past24Hours": {
            "Metric": {
              "Value": 5.3,
              "Unit": "mm",
              "UnitType": 3
            },
            "Imperial": {
              "Value": 0.21,
              "Unit": "in",
              "UnitType": 1
            }
          }
        },
        "TemperatureSummary": {
          "Past6HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 9.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 50,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 11.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 53,
                "Unit": "F",
                "UnitType": 18
              }
            }
          },
          "Past12HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 6,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 43,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 11.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 53,
                "Unit": "F",
                "UnitType": 18
              }
            }
          },
          "Past24HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 5.7,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 42,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 11.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 53,
                "Unit": "F",
                "UnitType": 18
              }
            }
          }
        },
        "MobileLink": "http://m.accuweather.com/en/de/berlin/10178/current-weather/178087?lang=en-us",
        "Link": "http://www.accuweather.com/en/de/berlin/10178/current-weather/178087?lang=en-us"
      }
    ]
    return currentWeather;
  } catch (err) {
   console.error(err);
  }
});

const cityForecastSlice = createSlice({
  name: 'cityForecast',
  initialState: {
    localizedName: undefined,
    days: [],
    current: {},
    locationKey: undefined,
    isLoading: false
  },
  reducers:{},
  extraReducers: {
    [getFiveDayWeatherAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFiveDayWeatherAsync.fulfilled]: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    },
    [getCurrentWeatherAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCurrentWeatherAsync.fulfilled]: (state, action) => {
        return {
          ...state,
          current: action.payload,
          isLoading: false
        };
    }
  }
});

export default cityForecastSlice.reducer;

