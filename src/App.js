import React, { useEffect } from "react";
import { getWeather } from "./Api";

export default function App() {
  useEffect(() => {
    getWeather();
  }, []);

  return <div className="app">{process.env.REACT_APP_WEATHER_KEY}</div>;
}
