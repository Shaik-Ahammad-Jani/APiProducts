// import React from 'react'
import PropTypes from 'prop-types';

const ApiProducts = ({display}) => {
  return (
    //    console.log('dis',display.display.title),
    <div style={{ width: '70%', height: '100vh', border: '1px solid black' }}>
        <div style={{border: '1px solid black', padding: '10px',margin: '10px'}}>
        <h1>{display.title}</h1>
        <img src={display.image} height={100} width={100} alt={display.title} />
        <p>{display.price}</p>
        <p>{display.description}</p>
        </div>

    </div>
  )
}
ApiProducts.propTypes = {
  display: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

// export default ApiProducts
export default ApiProducts
