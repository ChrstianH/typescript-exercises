import WeatherType from "./weather-type";

const promise: Promise<WeatherType> = new Promise((resolve, reject) => {
  const randomWeather = Math.floor(Math.random() * 10);
  let weather = WeatherType.none;
  if (randomWeather >= 0 && randomWeather <= 6) {
    if (WeatherType.cloudy === randomWeather) {
      weather = WeatherType.cloudy;
    } else if (WeatherType.none === randomWeather) {
      weather = WeatherType.none;
    } else if (WeatherType.rainy === randomWeather) {
      weather = WeatherType.rainy;
    } else if (WeatherType.snowy === randomWeather) {
      weather = WeatherType.snowy;
    } else if (WeatherType.stormy === randomWeather) {
      weather = WeatherType.stormy;
    } else if (WeatherType.sunny === randomWeather) {
      weather = WeatherType.sunny;
    } else if (WeatherType.windy === randomWeather) {
      weather = WeatherType.windy;
    }
    resolve(weather);
  } else {
    reject("Weather forecast could not be determined");
  }
});

promise
  .then((resp) => {
    console.log(`Wheather forecast: ${WeatherType[resp]}`);
  })
  .catch((err) => {
    console.error(err);
  });
