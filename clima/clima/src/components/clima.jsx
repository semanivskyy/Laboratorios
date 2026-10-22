import { useState, useEffect } from "react";
import styles from "../clima.module.css";

const LAT = 25.1947;
const LON = -99.826;

function Clima() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true&timezone=America%2FMonterrey`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo obtener el clima");
        return res.json();
      })
      .then((json) => {
        setWeather(json.current_weather);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.message}>Cargando clima...</p>;
  if (error) return <p className={styles.message}>Error: {error}</p>;

  return (

      <div className={styles.card}>
        <h2 className={styles.title}>Montemorelos, NL</h2>
        <div className={styles.fila}>
          <div className={styles.miniCard}>
          <p className={styles.temp}>
            {Math.round(weather.temperature)}°C
            </p>
          </div>
          <div className={styles.miniCard}>
          <p className={styles.detail}>
            🕒 Actualizado: {weather.time.split("T")[1]}
          </p>
        </div>
        </div>
        
        <p className={styles.detail}>💨 Viento: {weather.windspeed} km/h</p>
      </div>

  );
}

export default Clima;
