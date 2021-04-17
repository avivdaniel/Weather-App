import React, { useEffect, useState } from 'react';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn';
import { getCurrentWeather } from '@/favorites/service';
import Icon from '@/components/Icon';
import { Link } from 'react-router-dom';

const FavoriteCard = ({localizedName, locationKey}) => {
  const [currentCondition, setCurrentCondition] =useState({});

  useEffect(()=> {
    // (async () => {
    //   const [currentCondition] = await getCurrentWeather(locationKey);
    //   console.log(currentCondition);
    //   setCurrentCondition(currentCondition);
    // })();

    setCurrentCondition(
      {
        "LocalObservationDateTime": "2021-04-17T17:46:00+03:00",
        "EpochTime": 1618670760,
        "WeatherText": "Sunny",
        "WeatherIcon": 1,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": true,
        "Temperature": {
          "Metric": {
            "Value": 27.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 81,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperature": {
          "Metric": {
            "Value": 27.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 82,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RealFeelTemperatureShade": {
          "Metric": {
            "Value": 25.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 78,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "RelativeHumidity": 43,
        "IndoorRelativeHumidity": 43,
        "DewPoint": {
          "Metric": {
            "Value": 14,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 57,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Wind": {
          "Direction": {
            "Degrees": 90,
            "Localized": "E",
            "English": "E"
          },
          "Speed": {
            "Metric": {
              "Value": 13.9,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 8.6,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "WindGust": {
          "Speed": {
            "Metric": {
              "Value": 25.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Imperial": {
              "Value": 15.8,
              "Unit": "mi/h",
              "UnitType": 9
            }
          }
        },
        "UVIndex": 3,
        "UVIndexText": "Moderate",
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
        "CloudCover": 0,
        "Ceiling": {
          "Metric": {
            "Value": 8534,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 28000,
            "Unit": "ft",
            "UnitType": 0
          }
        },
        "Pressure": {
          "Metric": {
            "Value": 1013.4,
            "Unit": "mb",
            "UnitType": 14
          },
          "Imperial": {
            "Value": 29.93,
            "Unit": "inHg",
            "UnitType": 12
          }
        },
        "PressureTendency": {
          "LocalizedText": "Falling",
          "Code": "F"
        },
        "Past24HourTemperatureDeparture": {
          "Metric": {
            "Value": -0.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": -1,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "ApparentTemperature": {
          "Metric": {
            "Value": 27.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 81,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WindChillTemperature": {
          "Metric": {
            "Value": 27.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 81,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "WetBulbTemperature": {
          "Metric": {
            "Value": 18.7,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 66,
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
          "Past6Hours": {
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
          "Past9Hours": {
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
          "Past12Hours": {
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
          "Past18Hours": {
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
          "Past24Hours": {
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
          }
        },
        "TemperatureSummary": {
          "Past6HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 24.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 77,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 28.6,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 83,
                "Unit": "F",
                "UnitType": 18
              }
            }
          },
          "Past12HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 15.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 59,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 28.6,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 83,
                "Unit": "F",
                "UnitType": 18
              }
            }
          },
          "Past24HourRange": {
            "Minimum": {
              "Metric": {
                "Value": 15.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 59,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Maximum": {
              "Metric": {
                "Value": 28.6,
                "Unit": "C",
                "UnitType": 17
              },
              "Imperial": {
                "Value": 83,
                "Unit": "F",
                "UnitType": 18
              }
            }
          }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
      }
    )
  }, [locationKey]);

  useEffect(()=> {
  console.log(currentCondition.WeatherIcon)
  }, [currentCondition]);

  return (
    <div className="p-4 border border-white shadow-lg">
      <AddToFavoritesBtn localizedName={localizedName} locationKey={locationKey}/>
      <p>{localizedName}</p>
      <Icon number={currentCondition?.WeatherIcon}/>
      <p>{currentCondition?.WeatherText}</p>
      <p>{currentCondition?.Temperature?.Metric?.Value}</p>
      <Link to={} />
    </div>
  );
};

export default FavoriteCard;