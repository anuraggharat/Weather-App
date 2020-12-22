import axios from "axios";
export const getWeather = async (place) => {
  try {
    const res = await axios.get(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${place}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return { status: "error", error };
  }
};
