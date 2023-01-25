import '../App.css';

function WeatherMain() {
  return (
    <section className='container container_weather-main'>
      {/* TODO: current weather forecast - incl. location, temp, desc., high, low */}
      <h1 className='location_current'>Location</h1>
      <span className='temp_current'>Temp°</span>
      <span className='description_current'>Weather Description</span>
      <section className='tempRange_current'>
        H: <span className='high_current'>temp°</span>
        L: <span className='low_current'>temp°</span>
      </section>
    </section>
  );
}

export default WeatherMain;
