import '../App.css';

function Heading() {
  // TODO: add states and pass down useEffects as props to get input from search form

  return (
    <header className='header'>
      <span className='app_name'>Skyward Assessment</span>
      <form className='search_form'>
        <input
          className='search_input'
          type='text'
          name='zipCode'
          id='zipCode'
          placeholder='Enter zip code'
        />
        <input
          className='search_btn'
          type='submit'
          // value='&#8981;'
        />
      </form>
    </header>
  );
}

export default Heading;
