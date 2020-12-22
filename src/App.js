import React, { useEffect } from "react";
import { useState } from "react";
import { getWeather } from "./Api";
import Loader from "./Loader";
import { RiSearchLine } from "react-icons/ri";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [place, setPlace] = useState("Mumbai");
  const [location, setLocation] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  var d = new Date();

  const fetchCurrentWeather = () => {
    setLoading(true);
    setError(false);
    try {
      getWeather(place)
        .then((res) => {
          setCurrentWeather(res.current);
          setLocation(res.location);
        })
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(error);
  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  const searchWeather = () => {
    setLoading(true);
    setError(false);
    try {
      getWeather(place)
        .then((res) => {
          if (res["success"] == false) {
            setError(true);
          } else {
            setCurrentWeather(res.current);
            setLocation(res.location);
          }
        })
        .catch((err) => setError(true))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <div className="control">
        <input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter Location"
        ></input>
        <button onClick={() => searchWeather()}>
          <RiSearchLine className="white" />
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="container">
          <div>
            <h2>Couldn't find the location! Try Again</h2>
          </div>
        </div>
      ) : (
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
