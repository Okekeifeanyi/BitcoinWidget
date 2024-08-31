import React from 'react';

const PriceDisplay = ({ price, timestamp }) => {
  return (
    <div>
      <h2 className="header"> BITCOIN PRICE CONVERTER</h2>
      <p className='current-price'>Current Bitcoin Price: ${price ? price.toLocaleString() : '-'}</p>
      <h6 className='last-updated'>Last Updated: {timestamp || '-'}</h6>
    </div>
  );
};

export default PriceDisplay;