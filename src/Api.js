import axios from "axios";
export const getWeather = async () => {
  const data = await axios.get(
    `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=Mumbai`
  );
  console.log(data);
};
