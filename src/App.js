import React, { useState } from 'react';

import Weather from './Weather';

import search from './assets/search-outline.svg';
import './App.css';

function App() {
   const [city, setCity] = useState('');
   const [weather, setWeather] = useState();
   const [error, setError] = useState(false);

   async function getCity(e) {
      e.preventDefault();
      const encodedCity = encodeURIComponent(city);
      try {
         const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=773a3d077fc318937d6b724462ed2d81`
         );

         if (response.status === 200) {
            setError(false);
            const weather = await response.json();
            setWeather(weather);
         } else {
            throw 'Error fetching weather';
         }
      } catch (err) {
         console.log(err);
         setError(true);
      }
   }

   return (
      <div className="weather-app">
         <h1 className="weather-app__heading">Weather App</h1>
         <form className="weather__form" onSubmit={getCity}>
            <input
               className="weather__input"
               placeholder="Enter a city..."
               type="text"
               value={city}
               onChange={(e) => setCity(e.target.value)}
            />
            <button className="search-btn" type="submit">
               <img className="search-btn-icon" src={search} alt="search" />
            </button>
         </form>
         {weather && !error && (
            <Weather
               desc={weather.weather[0].description}
               temp={weather.main.temp}
               feels={weather.main.feels_like}
               icon={weather.weather[0].icon}
            />
         )}
         {error && (
            <div className="error">
               <h3 className="error__heading">Oops, Something Went Wrong :(</h3>
               <p className="error__subheading">Ensure to enter a valid city</p>
            </div>
         )}
      </div>
   );
}

export default App;
