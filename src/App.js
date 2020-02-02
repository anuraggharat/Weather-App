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
 
  // componentWillMount(){
    
  //   fetch('https:\\api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}')
  //   .then(res => res.json())
  //   .then(data =>console.log(data))
  // }

  getWeather = async() =>{
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
    const response = await api_call.json();
    console.log(response)
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
          <button type="submit" className="btn btn-primary" onClick={this.getWeather}>
            Search
          </button>

        </form>
      </div>
      <div className="container">
        <div className="temp-show">
          <div className="weather-icon">
            <i className="wi wi-night-sleet"></i>
          </div>
          <div className="weather-temp">
            <h1>31&#8451;</h1>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
