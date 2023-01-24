import { useState } from 'react';
import Heading from './components/Heading';
import WeatherMain from './components/WeatherMain';
import WeatherForecast from './components/WeatherForecast';
import WeatherExpanded from './components/WeatherExpanded';
import './App.css';

function App() {
  // TODO : add states and useEffects (get lat-log from zipcode, get weather data)
  // TODO : fix button so that clicking will toggle on and off the WeatherExpanded component
  // TODO : abstract the togglExpanded button to a component

  return (
    <div className='App'>
      <Heading />
      <WeatherMain />
      <WeatherForecast />

      <button className='toggleExpand'>Expand For More</button>

      <WeatherExpanded />
    </div>
  );
}

export default App;
