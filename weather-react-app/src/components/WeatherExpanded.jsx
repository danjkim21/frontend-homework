import Card from './Card';
import '../App.css';

function WeatherExpanded({ dataCurrent, getDateTimeFromUnix }) {
  let sunRiseTimeConv = getDateTimeFromUnix(dataCurrent.sunrise).convertedTime;
  let sunSetTimeConv = getDateTimeFromUnix(dataCurrent.sunset).convertedTime;

  return (
    <section className='container container_weather-expanded'>
      <Card title='WIND SPEED' units='mph' dataItem={dataCurrent.wind_speed} />
      <Card title='HUMIDITY' units='%' dataItem={dataCurrent.humidity} />
      <Card title='PRESSURE' units='hPa' dataItem={dataCurrent.pressure} />
      <Card title='SUNRISE/SET' dataItem={[sunRiseTimeConv, sunSetTimeConv]} />
    </section>
  );
}

export default WeatherExpanded;
