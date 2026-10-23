# Aerolíneas Angelicales — Laboratorio React + Vite

Sistema de reserva de vuelos con datos simulados en memoria. Origen fijo en Monterrey (MTY).

## Cómo ejecutarlo

    npm install
    npm run dev

## Preguntas reflexivas de cierre

**1. Arquitectura de estado: ¿qué ventajas ofreció separar el catálogo en `flightsData.js`?**

Separa los datos de la interfaz. `App.jsx` queda más corto y solo orquesta el flujo, mientras que `flightsData.js` concentra aeropuertos, vuelos y tarifas. Esos datos se reutilizan en varios componentes: `FlightSearch` usa `AIRPORTS`, `FlightCard` usa `TARIFF_TYPES` y `App` usa `FLIGHTS_CATALOG`. Si cambia un precio o se agrega una ruta, se edita un solo archivo sin tocar ningún componente. Además, la forma de los datos ya se parece a la de una API real, lo que facilita la migración futura.

**2. Transición hacia un backend real: ¿cómo cambiaría el flujo con una API REST?**

El catálogo dejaría de importarse y se pediría con `fetch` (o `axios`) dentro de un `useEffect`. Como la respuesta es asíncrona, habría que agregar estados de carga y de error, con spinner y mensaje si falla la conexión. El filtro por destino podría hacerse en el servidor con un parámetro como `?destino=CUN` en vez de filtrar en el cliente. También habría que considerar CORS y que los `id` vengan del servidor. Los componentes de presentación casi no cambiarían, porque reciben los mismos objetos por props.

**3. Estado derivado: ¿por qué el total se calcula dentro de `FlightCard.jsx`?**

`unitPrice` y `totalPrice` se pueden obtener de datos que ya existen: `basePrice`, el multiplicador de la tarifa y el número de pasajeros. Guardarlos en otros `useState` duplicaría información y obligaría a mantenerla sincronizada, con riesgo de que quede un precio desactualizado. Al calcularlos durante el render, React los recalcula solo cada vez que cambia la tarifa seleccionada o el número de pasajeros, y siempre hay una única fuente de verdad.