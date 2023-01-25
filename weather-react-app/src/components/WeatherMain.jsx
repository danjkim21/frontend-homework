import '../App.css';

function WeatherMain({ city, country, dataCurrent, dataDaily }) {
  return (
    <section className='container container_weather-main'>
      {/* TODO: current weather forecast - incl. location, temp, desc., high, low */}
      <h1 className='location_current'>
        {city}, {country}
      </h1>
      <span className='temp_current'>{`${dataCurrent.temp}°`}</span>
      <span className='description_current'>
        {dataCurrent.weather === undefined
          ? '--'
          : dataCurrent.weather[0].description}
      </span>
      <section className='tempRange_current'>
        H:{' '}
        <span className='high_current'>
          {dataDaily[0] === undefined ? '--' : `${dataDaily[0].temp.max}°`}
        </span>
        L:{' '}
        <span className='low_current'>
          {dataDaily[0] === undefined ? '--' : `${dataDaily[0].temp.min}°`}
        </span>
      </section>
    </section>
  );
}

export default WeatherMain;
