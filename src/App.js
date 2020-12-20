import React, { useEffect } from "react";
import { useState } from "react";
import { getWeather } from "./Api";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [location, setLocation] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchCurrentWeather = () => {
    setLoading(true);
    setError("");
    try {
      getWeather()
        .then((res) => setCurrentWeather(res.current))
        .then((res) => setLocation(res.location))
        .catch((err) => setError("Something went wrong"))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(currentWeather.weather_icons);
  console.log(currentWeather);
  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  return (
    <div className="app">
      {!loading && (
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Friday 26th December</p>
              <h3>{location.name}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>27&deg; C</h1>
            </div>
            <div className="col">
              <h3>HAZE</h3>
              <div className="row-2">
                <div className="card">
                  <p>Wind Speed</p>
                  <h2>23Kmph</h2>
                </div>
                <div className="card">
                  <p>Wind Speed</p>
                  <h2>23Kmph</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
