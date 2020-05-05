import moment from 'moment';

const getDayType = (icon_code) => {
  const code = parseInt(icon_code.split('/day/')[1].split('.')[0], 10);
  if (code === 113) {
    return 'sunny';
  }
  if (code === 116) {
    return 'sun-cloudy';
  }
  if (code >= 119 && code <= 143) {
    return 'cloudy';
  }
  if (code > 143) {
    return 'rainy';
  }
};

export const formatWeatherData = (weatherData) => {
  return weatherData.map((item) => {
    return {
      date: item.date,
      temp: item.day.avgtemp_c,
      wind_speed: item.day.maxwind_kph,
      day_type: getDayType(item.day.condition.icon)
    };
  });
};
