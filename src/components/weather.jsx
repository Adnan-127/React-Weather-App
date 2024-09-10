import React from "react"

function Weather(props) {
  return (
    <>
      <div className="container">
        <h1><i className="fa-solid fa-cloud-sun-rain"></i> Weather App</h1>
        <form onSubmit={props.cityHandler}>
          <input type="text" name="locationInput" id="locationInput" placeholder="Enter a city" />
          <button type="submit" id="searchButton"><i className="fa-solid fa-search"></i></button>
        </form>
        {/* -- weather -- */}
        <div className="weather-info">
          {
            props.data.cityName && <h2 id="location"><i className="fa-solid fa-location"></i>{props.data.cityName}</h2>
          }
          {
            props.data.country && <span className="country"><i className="fa-solid fa-location-dot"></i>{props.data.country}</span>
          }
          {
            props.data.temp && <p id="temperature" name="temp">{props.data.temp}<sup>&deg;C</sup></p>
          }
          {
            props.data.feels && <p id="feels">Feels Like: {props.data.feels}<sup>&deg;C</sup></p>
          }
          {
            props.data.description && <p id="description">{props.data.description}</p>
          }
          {
            props.data.wrong && <p className="wrong">{props.data.wrong} <span>please enter a valid city</span></p>
          }
          {
            props.data.loading && <div className="loader-container"><p className="loader"></p></div>
          }
        </div>
      </div >
    </>
  )
}

export default Weather