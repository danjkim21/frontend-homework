import '../App.css';

function WeatherForecastItem() {
  return (
    <section className='forecast_daily-item'>
      <h3 className='title_date'>Day</h3>
      <img className='weatherIcon_daily' src='#' alt='weather icon' />
      <span className='temp_daily'>temp°</span>
    </section>
  );
}

export default WeatherForecastItem;
