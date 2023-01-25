import '../App.css';

function WeatherForecast({ dataDaily, getDateTimeFromUnix }) {
  let forecast = dataDaily.map((day) => {
    let dateConv = getDateTimeFromUnix(day.dt).convertedDate;
    let iconAddress = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

    return (
      <section className='forecast_daily-item' key={day.dt}>
        <h3 className='title_date'>{dateConv}</h3>
        <img
          className='weatherIcon_daily'
          src={day.weather === undefined ? '#' : iconAddress}
          alt='weather icon'
        />
        <span className='temp_daily'>{`${day.temp.day}°`}</span>
      </section>
    );
  });

  return (
    <section className='container container_weather-forecast'>
      <section className='container_header'>
        <h2 className='container_title'>7-DAY FORECAST</h2>
      </section>
      <section className='container_body forecast_daily-body'>
        {forecast}
      </section>
    </section>
  );
}

export default WeatherForecast;
