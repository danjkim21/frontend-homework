import '../App.css';

function Card({ title, dataItem, units }) {
  return (
    <section className='card'>
      <section className='card_header'>
        <h2 className='card_title'>{title}</h2>
      </section>
      <section className='card_body'>
        {dataItem} {units}
      </section>
    </section>
  );
}

export default Card;
