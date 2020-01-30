import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "weather-icons/css/weather-icons.css"

const API_KEY ='b51f52031293aa958e4b47c75ea3ef16';

class App extends React.Component{
  constructor(){
    super()
    this.state={};
  }

  getWeather = async() =>{
    const api_call = await fetch(`https:\\api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
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
          <button type="submit" className="btn btn-primary">
            Search
          </button>

        </form>

      </div>
      </div>
    );
  }
}

export default App;
