import { useState, useEffect } from 'react'

import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'
import Loading from './Loading'

const BuscadorClima = () => {

  const APP_URL='https://api.openweathermap.org/data/2.5/weather'

  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  
  const fetchClima = async (city = 'lima') => {
    try{
      const respone = await fetch(`${APP_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}`)
      const data = await respone.json()
      if (data.cod && data.cod !== 200) {
        setError(`No se encontró la ciudad: ${city}`);
        setWeather(null);
      } else {
        setWeather(data);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  const handleChangeCity = (city) =>{
    setWeather(null)
    fetchClima(city)
  }

  useEffect(()=> {
    console.log('iniciando aplicación de clima')
    fetchClima()
  },[])

  return (
    <div className='weatherContainer'>
      <WeatherForm onChangeCity={handleChangeCity} />
      {error ? <div>{error}</div> :
        weather ? <WeatherMainInfo weather={weather} /> : <Loading />
      }
      
    </div>
  )
}

export default BuscadorClima