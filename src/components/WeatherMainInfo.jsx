import styles from './WeatherMainInfo.module.css'

const WeatherMainInfo = ({weather}) =>{
  return(
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location?.name}</div>
      <div className={styles.country}>{weather?.location?.country}</div>
      <div className={styles.row}>
        <div>
        <img className={styles.image} src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} alt="" />
        </div>
        <div className={styles.weatherConditions}>
          <div className={styles.condition}>
            {weather?.weather[0]?.description}
          </div>
          <div className={styles.current}>{parseInt(weather?.main.temp - 273)}°C</div>
        </div>
      </div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.coord?.lon}5!3d${weather?.coord?.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default WeatherMainInfo