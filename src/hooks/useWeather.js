import { getWeatherData } from "../api/weatherService";
import { useState } from "react";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getWeatherData(city);
      setWeather(data); //si hay exito guardamos los datos
    } catch (err) {
      setError(err.message);
      setWeather(null); //limpiamos datos viejos si la nueva busqueda falló
    } finally {
      setLoading(false); //detenemos el indicador de carga haya exito o no
    }
  };
  return { weather, loading, error, fetchWeather };
};
