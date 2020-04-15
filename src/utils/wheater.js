import moment from 'moment';

export const formatWheaterData = (wheaterData) => {
  return wheaterData.map((item) => {
    console.log(item.dt);
    return {
      hour: moment(item.dt * 1000).format('DD MMM YYYY HH:MM:SS'),
      wind: item.wind,
      wheater: item.wheater,
      data: item.main
    };
  });
};
