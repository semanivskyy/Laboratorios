// Códigos de clima WMO que devuelve Open-Meteo (campo weather_code)
const WEATHER_CODES = {
  0: { label: 'Despejado', icon: '☀️', nightIcon: '🌙' },
  1: { label: 'Mayormente despejado', icon: '🌤️', nightIcon: '🌙' },
  2: { label: 'Parcialmente nublado', icon: '⛅' },
  3: { label: 'Nublado', icon: '☁️' },
  45: { label: 'Niebla', icon: '🌫️' },
  48: { label: 'Niebla con escarcha', icon: '🌫️' },
  51: { label: 'Llovizna ligera', icon: '🌦️' },
  53: { label: 'Llovizna', icon: '🌦️' },
  55: { label: 'Llovizna intensa', icon: '🌦️' },
  56: { label: 'Llovizna helada', icon: '🌧️' },
  57: { label: 'Llovizna helada intensa', icon: '🌧️' },
  61: { label: 'Lluvia ligera', icon: '🌧️' },
  63: { label: 'Lluvia', icon: '🌧️' },
  65: { label: 'Lluvia fuerte', icon: '🌧️' },
  66: { label: 'Lluvia helada', icon: '🌧️' },
  67: { label: 'Lluvia helada fuerte', icon: '🌧️' },
  71: { label: 'Nieve ligera', icon: '🌨️' },
  73: { label: 'Nieve', icon: '🌨️' },
  75: { label: 'Nieve fuerte', icon: '🌨️' },
  77: { label: 'Granizo fino', icon: '🌨️' },
  80: { label: 'Chubascos ligeros', icon: '🌦️' },
  81: { label: 'Chubascos', icon: '🌧️' },
  82: { label: 'Chubascos fuertes', icon: '🌧️' },
  85: { label: 'Chubascos de nieve', icon: '🌨️' },
  86: { label: 'Chubascos de nieve fuertes', icon: '🌨️' },
  95: { label: 'Tormenta', icon: '⛈️' },
  96: { label: 'Tormenta con granizo', icon: '⛈️' },
  99: { label: 'Tormenta con granizo fuerte', icon: '⛈️' },
};

// Devuelve el texto y el ícono para un código; de noche usa la luna cuando existe
export function describeWeather(code, isDay) {
  const info = WEATHER_CODES[code] ?? { label: 'Sin datos', icon: '🌡️' };
  return {
    label: info.label,
    icon: isDay ? info.icon : (info.nightIcon ?? info.icon),
  };
}