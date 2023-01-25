import { useEffect } from 'react';
import { useState } from 'react';
import Heading from './components/Heading';
import WeatherMain from './components/WeatherMain';
import WeatherForecast from './components/WeatherForecast';
import BtnToggle from './components/BtnToggle';
import WeatherExpanded from './components/WeatherExpanded';
import './App.css';

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  let [isActive, setIsActive] = useState(false);
  let [zip, setZip] = useState(10001);
  let [lat, setLat] = useState(40.7484);
  let [lon, setLon] = useState(-73.9967);
  let [city, setCity] = useState('New York');
  let [country, setCountry] = useState('US');
  let [dataCurrent, setDataCurrent] = useState([]);
  let [dataDaily, setDataDaily] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newZip = e.target.elements.zipCode.value;
    setZip(newZip);
    getCoordsFromZip(zip);
    getWeatherData(lat, lon);
  };

  const getCoordsFromZip = async (zip) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();

      setLat(json.lat);
      setLon(json.lon);
      setCity(json.name);
      setCountry(json.country);
    } catch (err) {
      console.error(err);
    }
  };

  // gets and renders default data - NY
  useEffect(() => {
    const getInitialData = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        const { current, daily } = json;
        setDataCurrent(current);
        setDataDaily(daily);
      } catch (err) {
        console.error(err);
      }
    };
    getInitialData(lat, lon).catch(console.error);
  }, [zip, lat, lon]);

  const getWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const json = await response.json();
      const { current, daily } = json;
      setDataCurrent(current);
      setDataDaily(daily);
    } catch (err) {
      console.error(err);
    }
  };

  // Helper function - toggles extra weather data on button click
  const toggleExpandedData = (e) => {
    e.preventDefault();
    setIsActive((currentActive) => !currentActive); // ! - flips the boolean val
  };

  // Helper function - converts unix format to date and time in an object
  // input - num
  // output - obj {dateConv: string, timeConv: string}
  const getDateTimeFromUnix = (unix) => {
    const dateObject = new Date(unix * 1000);
    const dateConv = dateObject.toLocaleDateString('en-US');
    const timeConv = dateObject.toLocaleTimeString('en-US');

    return { convertedDate: dateConv, convertedTime: timeConv };
  };

  return (
    <div className='App'>
      <Heading handleSubmit={handleSubmit} />
      <WeatherMain
        city={city}
        country={country}
        dataCurrent={dataCurrent}
        dataDaily={dataDaily}
      />
      <WeatherForecast
        dataDaily={dataDaily}
        getDateTimeFromUnix={getDateTimeFromUnix}
      />

      <BtnToggle toggleExpandedData={toggleExpandedData} />

      {/* if isActive is true > display expanded weather data */}
      {isActive && (
        <WeatherExpanded
          dataCurrent={dataCurrent}
          getDateTimeFromUnix={getDateTimeFromUnix}
        />
      )}
    </div>
  );
}

export default App;
