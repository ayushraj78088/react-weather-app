import { useState } from "react";
import InfoBox from "../InfoBox/InfoBox";
import SearchBox from "../SearchBox/SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <h1>Weather App by AYUSH</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
