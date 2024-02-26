import { useState, useEffect } from 'react'


const BuscadorClima = () => {

  const [ciudad, setCiudad] = useState('')
  const [clima, setClima] = useState(null)
  const [error, setError] = useState(null)
  
  const fetchClima = async () => {
    try{
      const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${import.meta.env.VITE_API_KEY}`)
      const data = await respone.json()
      if (data.cod && data.cod !== 200) {
        setError(`No se encontró la ciudad: ${ciudad}`);
        setClima(null);
      } else {
        setClima(data);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  }
  
  const onSubmit = e => {
    e.preventDefault()
    if(!ciudad) return alert('Escribe una ciudad')
    console.log(ciudad)
    fetchClima()
  }

  return (
    <div className='principal-contenedor'>
      <form className='formulario' onSubmit={onSubmit}>
        <input 
          className='input'
          type="text"
          value={ciudad}
          onChange={e => setCiudad(e.target.value)}
        />
        <button>Buscar</button>
      </form>
      
      {error && <div>{error}</div>}
      <div className='clima-contenedor'>
        {clima && 
          <>
            <div className='clima-datos' >
                <h2>Ciudad: {clima?.name}</h2>
                <p> <b>Condición meteorológica: </b>   {clima?.weather[0].description}</p>
                <p> <b>Temperatura: </b>  {parseInt(clima?.main.temp - 273)}°C</p>
            </div>
            <div>
              <img src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}.png`} alt="" />
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default BuscadorClima