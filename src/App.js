import React,{ Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "weather-icons/css/weather-icons.css"


const API_KEY ='b51f52031293aa958e4b47c75ea3ef16';
class App extends Component{
  constructor(){
    super()
    this.state={
      country:undefined,
      city:undefined
    };
    this.getWeather();

 }
  calCelsius(temp){
    var cel = Math.floor(temp-273.15);
    return cel;
  }
  getWeather = async() =>{
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
    const response = await api_call.json();
    console.log(response)
    this.setState({
      city:response.name,
      country:response.sys.country,
      temp:this.calCelsius(response.main.temp),
      max_temp:this.calCelsius(response.main.temp_max),
      min_temp:this.calCelsius(response.main.temp_min),
      weather:response.weather.main
    })
  } 

  render(){
    return(
      <div className="App">
      <div className="container search-bar">
        <form className="search-bar-form">
          <input 
          className="input-city"
          placeholder="Search City"
          name="city" 
          />
          <input 
          className="input-country"
          placeholder="Search Country"
          name="country" 
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>

        </form>
      </div>
      <div className="container">
        <div className="temp-show">
          <div className="weather-icon">
            <i className="wi wi-night-sleet display-1"></i>
            <h2>{this.state.weather}</h2>
          </div>
          <div className="city-display">
          <h1>{this.state.city},{this.state.country}</h1>
          </div>
          <div className="weather-temp">
            <h1>{this.state.temp}&deg;C</h1>
          </div>
          <div className="weather-temp-min-max">
            <h1>{this.state.min_temp}&deg;C</h1><h1>{this.state.max_temp}&deg;C</h1>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
