import React from 'react';

//Converter Component: this will show the conversion from USD to BTC
const Converter = ({ usdAmount, btcAmount }) => {
  return (
    <div className="converter">
      <p> Converted Price </p>
      <p>{usdAmount ? usdAmount : '-'} USD = {btcAmount} BTC</p>
    </div>
  );
};

export default Converter;