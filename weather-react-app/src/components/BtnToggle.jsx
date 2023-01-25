import '../App.css';

function BtnToggle({ toggleExpandedData }) {
  return (
    <button onClick={toggleExpandedData} className='toggleExpand_btn'>
      Expand For More
    </button>
  );
}

export default BtnToggle;
