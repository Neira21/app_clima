import { useState } from 'react'
import styles from './WeatherForm.module.css'

const WeatherForm = ({onChangeCity}) => {
  const [city, setCity] = useState('Lima')

  const handleChange = (e) => {
    const value = e.target.value
    if(value !== '')
      setCity(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onChangeCity(city)
  }

  return(
    <form className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" onChange={handleChange} value={city} />
    </form>
  )
}

export default WeatherForm