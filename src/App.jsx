import { useState, useEffect } from 'react'
import './App.css'
import Weather from './components/weather'

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    temp: '',
    feels: '',
    cityName: '',
    description: '',
    wrong: '',
    loading: false
  });
  const API_KEY = "a0215b5978a3ab88cabad20af874e0ce"
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const cityHandler = (e) => {
    e.preventDefault()
    setCity(e.target.locationInput.value)
  };

  const fetchData = async () => {
    try {
      setData({
        loading: true
      })
      const result = await fetch(API_URL)
      const resData = await result.json()
      setData({
        temp: parseInt(resData.main.temp),
        feels: parseInt(resData.main.feels_like),
        cityName: resData.name,
        description: resData.weather[0].description,
        loading: false
      })
    }
    catch (error) {
      setData({ wrong: 'Invalid city' })
      document.getElementById("locationInput").focus()
    }
  }

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city])

  return (
    <>
      <Weather cityHandler={cityHandler} data={data} />
    </>
  )
}

export default App
