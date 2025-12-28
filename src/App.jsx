import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");

  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city); //el hook busca la ciudad
    }
  };

  return (
    <div className="min-h-screen bg-slate-500 text-while py-10 px-4 flex flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl font-medium text-shadow-blue-50">
        Aplicación del clima
      </h1>
      <form className="flex flex-col gap-6 mb-10" onSubmit={handleSearch}>
        <input
          className="text-white outline-none bg-slate-800  p-3 rounded-lg o focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="busca tu ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-200 font-medium px-6 py-3 border border-none rounded-2xl transition-all"
          type="submit"
        >
          buscar
        </button>
      </form>

      {loading && <p className="text-white mt-4">Cargando..</p>}
      {error && <p className="text-red-400 mt-4">Error: {error}</p>}
      {weather && (
        <div className="text-center text-white mt-4">
          <h2 className="font-bold text-4xl">{weather.name}</h2>
          <p className="text-6xl">{Math.round(weather.main.temp)} C°</p>
          <p className="text-2xl">{weather.weather[0].description}</p>
          <p>{weather.sys.country}</p>
        </div>
      )}
    </div>
  );
}
export default App;
