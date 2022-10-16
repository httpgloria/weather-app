import React from 'react';

function Weather({ desc, temp, feels, icon }) {
   function getCelsius(temp) {
      return Math.ceil(temp - 273.15);
   }

   return (
      <div className="weather">
         <img
            className="weather__img"
            src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={desc}
         />
         <h1 className="weather__temp weather__temp-wrapper">
            {getCelsius(temp)}
            <span className="weather__degrees">°C</span>
         </h1>
         <h2 className="weather__description">{desc}</h2>
         <div className="weather__feels">
            <span className="weather__feels-text">Feels like: </span>
            <div className="weather__temp-wrapper">
               {getCelsius(feels)}
               <span className="weather__degrees--small">°C</span>
            </div>
         </div>
      </div>
   );
}

export default Weather;
