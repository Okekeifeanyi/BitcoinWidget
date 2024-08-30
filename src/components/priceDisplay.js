import React from 'react';

const PriceDisplay = ({ price, timestamp }) => (
  <div>
    <h2>Bitcoin Price: {price ? `$${price}` : '-'}</h2>
    <p>Last Updated: {timestamp || '-'}</p>
  </div>
);

export default PriceDisplay;
