// src/api/weatherService.js
import { weather_config } from "../config";

export const getWeatherData = async (city) => {
  // Buscamos en el objeto global del navegador

  const response = await fetch(
    `${weather_config.base_url}?q=${city}&appid=${weather_config.api_key}&units=metric&lang=es`
  );

  if (!response.ok) throw new Error("ciudad no encontrada");
  return await response.json();
};
