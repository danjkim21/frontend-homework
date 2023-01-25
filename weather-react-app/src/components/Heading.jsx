import logo from '../assets/skyward-logo.svg';
import '../App.css';

function Heading({ handleSubmit }) {
  return (
    <header className='header'>
      <img className='logo' src={logo} alt='Skyward Logo' />
      <span className='app_name'>SKYWARD</span>
      <form className='search_form' onSubmit={handleSubmit}>
        <input
          className='search_input'
          type='number'
          name='zipCode'
          id='zipCode'
          placeholder='Enter zip code'
        />
        <input className='search_btn' type='submit' value='&#8981;' />
      </form>
    </header>
  );
}

export default Heading;
