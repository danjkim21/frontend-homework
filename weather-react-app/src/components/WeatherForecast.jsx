import WeatherForecastItem from './WeatherForecastItem';
import '../App.css';

function WeatherForecast() {
  return (
    <section className='container container_weather-forecast'>
      <section className='container_header'>
        <h2 className='container_title'>7-Day Forecast</h2>
      </section>
      <section className='container_body forecast_daily-body'>
        {/* TODO: daily forecasts - incl. day, icon, temp */}
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
        <WeatherForecastItem />
      </section>
    </section>
  );
}

export default WeatherForecast;
