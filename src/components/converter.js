import React from 'react';

const Converter = ({ usdAmount, btcAmount }) => {
  return (
    <div className="converter">
      <p> Converted Price </p>
      <p>{usdAmount ? usdAmount : '-'} USD = {btcAmount} BTC</p>
    </div>
  );
};

export default Converter;