import { useState, useEffect } from 'react';
import styles from './Clima.module.css';
import { CIUDADES } from '../data/ciudades';
import { describeWeather } from '../data/weatherCodes';

const API_URL = 'https://api.open-meteo.com/v1/forecast';
const CAMPOS =
  'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day';

function Clima() {
  const [ciudadId, setCiudadId] = useState(CIUDADES[0].id);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recarga, setRecarga] = useState(0);

  const ciudad = CIUDADES.find((c) => c.id === ciudadId);

  useEffect(() => {
    // AbortController cancela la petición si el componente se desmonta o cambia la ciudad
    const controller = new AbortController();
    const url = `${API_URL}?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current=${CAMPOS}&timezone=auto`;

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('El servicio del clima no respondió.');
        return res.json();
      })
      .then((json) => {
        setWeather(json.current);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return; // petición cancelada a propósito
        setError('No se pudo obtener el clima. Revisa tu conexión e inténtalo de nuevo.');
        setLoading(false);
      });

    return () => controller.abort();
  }, [ciudad, recarga]);

  const cambiarCiudad = (e) => {
    setLoading(true);
    setCiudadId(e.target.value);
  };

  const actualizar = () => {
    setLoading(true);
    setRecarga((n) => n + 1);
  };

  const esDia = weather ? weather.is_day === 1 : true;
  const condicion = weather ? describeWeather(weather.weather_code, esDia) : null;

  return (
    <section className={`${styles.card} ${esDia ? '' : styles.noche}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{ciudad.nombre}</h2>
        <select
          className={styles.select}
          value={ciudadId}
          onChange={cambiarCiudad}
          aria-label="Elegir ciudad"
        >
          {CIUDADES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <p className={styles.message} role="status">
          Cargando clima...
        </p>
      )}

      {!loading && error && (
        <div className={styles.message} role="alert">
          <p>{error}</p>
          <button type="button" className={styles.boton} onClick={actualizar}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && weather && (
        <>
          <div className={styles.fila}>
            <div className={styles.miniCard}>
              <span className={styles.icono}>{condicion.icon}</span>
              <p className={styles.temp}>{Math.round(weather.temperature_2m)}°C</p>
              <p className={styles.detail}>{condicion.label}</p>
              <p className={styles.detailSmall}>
                Sensación {Math.round(weather.apparent_temperature)}°C
              </p>
            </div>

            <div className={styles.miniCard}>
              <p className={styles.dato}>
                <span className={styles.datoValor}>💨 {weather.wind_speed_10m} km/h</span>
                <span className={styles.detailSmall}>Viento</span>
              </p>
              <p className={styles.dato}>
                <span className={styles.datoValor}>💧 {weather.relative_humidity_2m}%</span>
                <span className={styles.detailSmall}>Humedad</span>
              </p>
            </div>
          </div>

          <p className={styles.detailSmall}>
            🕒 Actualizado: {weather.time.split('T')[1]}
          </p>
          <button type="button" className={styles.boton} onClick={actualizar}>
            Actualizar
          </button>
        </>
      )}
    </section>
  );
}

export default Clima;