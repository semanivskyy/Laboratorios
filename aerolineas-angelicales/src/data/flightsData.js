export const AIRPORTS = [
  { code: 'MTY', name: 'Monterrey - Aeropuerto Intl. Mariano Escobedo', city: 'Monterrey' },
  { code: 'CUN', name: 'Cancún - Aeropuerto Intl. de Cancún', city: 'Cancún' },
  { code: 'MEX', name: 'Ciudad de México - AICM', city: 'CDMX' },
  { code: 'GDL', name: 'Guadalajara - Aeropuerto Intl. Miguel Hidalgo', city: 'Guadalajara' },
  { code: 'TIJ', name: 'Tijuana - Aeropuerto Intl. Abelardo L. Rodríguez', city: 'Tijuana' },
  { code: 'MID', name: 'Mérida - Aeropuerto Intl. Manuel Crescencio Rejón', city: 'Mérida' },
  { code: 'PBC', name: 'Puebla - Aeropuerto Intl. Hermanos Serdán', city: 'Puebla' }
];

export const FLIGHTS_CATALOG = [
  {
    id: 'ANG-101',
    flightNumber: 'AN 101',
    origin: 'MTY',
    destination: 'CUN',
    departureTime: '06:15',
    arrivalTime: '09:35',
    duration: '2h 20m',
    basePrice: 1250,
    seatsAvailable: 8,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  },
  {
    id: 'ANG-102',
    flightNumber: 'AN 102',
    origin: 'MTY',
    destination: 'CUN',
    departureTime: '14:40',
    arrivalTime: '18:00',
    duration: '2h 20m',
    basePrice: 1480,
    seatsAvailable: 3,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  },
  {
    id: 'ANG-201',
    flightNumber: 'AN 201',
    origin: 'MTY',
    destination: 'MEX',
    departureTime: '07:00',
    arrivalTime: '08:40',
    duration: '1h 40m',
    basePrice: 890,
    seatsAvailable: 14,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  },
  {
    id: 'ANG-202',
    flightNumber: 'AN 202',
    origin: 'MTY',
    destination: 'MEX',
    departureTime: '17:30',
    arrivalTime: '19:10',
    duration: '1h 40m',
    basePrice: 1100,
    seatsAvailable: 5,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  },
  {
    id: 'ANG-301',
    flightNumber: 'AN 301',
    origin: 'MTY',
    destination: 'GDL',
    departureTime: '09:20',
    arrivalTime: '10:45',
    duration: '1h 25m',
    basePrice: 940,
    seatsAvailable: 12,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  },
  {
    id: 'ANG-401',
    flightNumber: 'AN 401',
    origin: 'MTY',
    destination: 'TIJ',
    departureTime: '11:00',
    arrivalTime: '12:35',
    duration: '2h 35m',
    basePrice: 1650,
    seatsAvailable: 6,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  },
  {
    id: 'ANG-501',
    flightNumber: 'AN 501',
    origin: 'MTY',
    destination: 'MID',
    departureTime: '12:15',
    arrivalTime: '14:30',
    duration: '2h 15m',
    basePrice: 1390,
    seatsAvailable: 9,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  },
  {
    id: 'ANG-601',
    flightNumber: 'AN 601',
    origin: 'MTY',
    destination: 'PBC',
    departureTime: '08:10',
    arrivalTime: '09:40',
    duration: '1h 30m',
    basePrice: 1020,
    seatsAvailable: 11,
    stops: 'Directo',
    airline: 'Aerolíneas Angelicales'
  }
];

export const TARIFF_TYPES = {
  ZERO: { name: 'Zero', multiplier: 1.0, baggage: 'Solo objeto personal (mochila)' },
  LIGHT: { name: 'Light', multiplier: 1.25, baggage: 'Objeto personal + Maleta de mano 10kg' },
  EXTRA: { name: 'Smart', multiplier: 1.60, baggage: 'Mano 10kg + Equipaje documentado 25kg + Asiento VIP' }
};
