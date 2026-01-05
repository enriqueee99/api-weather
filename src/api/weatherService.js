// src/api/weatherService.js
//import { weather_config } from "../config";

export const getWeatherData = async (city) => {
  // Buscamos en el objeto global del navegador
  console.log("Variables cargadas en Vite:", import.meta.env); // 🕵️ Esto nos dirá la verdad
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const base_url = "https://api.openweathermap.org/data/2.5/weather";
  if (!apiKey) {
    throw new Error("Api key no configurada en el servidor");
  }

  const response = await fetch(
    `${base_url}?q=${city}&appid=${apiKey}&units=metric&lang=es`
  );

  if (!response.ok) throw new Error("ciudad no encontrada");
  return await response.json();
};
