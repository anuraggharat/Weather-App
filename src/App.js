import React, { useEffect } from "react";
import { useState } from "react";
import { getWeather } from "./Api";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  var d = new Date();

  const fetchCurrentWeather = () => {
    setLoading(true);
    setError("");
    try {
      getWeather()
        .then((res) => {
          setCurrentWeather(res.current);
          setLocation(res.location);
        })
        .catch((err) => setError("Something went wrong"))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  console.log();

  return (
    <div className="app">
      {!loading && (
        <div className="container">
          <div className="row">
            <div className="col">
              <p>{d.toDateString()}</p>

              <h3>{location.name}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>
                {currentWeather.temperature}&deg;<span>C</span>
              </h1>
            </div>
            <div className="col">
              <h3>{currentWeather.weather_descriptions}</h3>
              <div className="row-2">
                <div className="card">
                  <p>Wind Speed</p>
                  <h2>{currentWeather.wind_speed}</h2>
                </div>
                <div className="card">
                  <p>Humidity</p>
                  <h2>{currentWeather.humidity}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
