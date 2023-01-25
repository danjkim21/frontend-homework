import logo from '../assets/skyward-logo.svg';
import '../App.css';
import { useState } from 'react';

function Heading({ handleSubmit }) {
  // TODO: add states and pass down useEffects as props to get input from search form

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
