import moment from 'moment';

export const formatWheaterData = (wheaterData) => {
  return wheaterData.map((item) => {
    return {
      hour: moment(item.dt * 1000).format('DD MMM YYYY HH:MM:SS'),
      wind: item.wind,
      weather: item.weather[0],
      data: {
        ...item.main,
        feels_like: parseFloat((item.main.feels_like - 273.15).toFixed(2), 10),
        temp: parseFloat((item.main.temp - 273.15).toFixed(2), 10),
        temp_max: parseFloat((item.main.temp_max - 273.15).toFixed(2), 10),
        temp_min: parseFloat((item.main.temp_min - 273.15).toFixed(2), 10)
      }
    };
  });
};
