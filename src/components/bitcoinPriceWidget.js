// import React, { useState, useEffect } from 'react';
// import { fetchBitcoinPrice } from '../services/bitcoinservices';
// import PriceDisplay from './priceDisplay';
// import Converter from './converter';
// import InputField from './inputField';
// import './bitcoinPriceWidget.css'; 

// const BitcoinPriceWidget = () => {
//   const [price, setPrice] = useState(null);
//   const [timestamp, setTimestamp] = useState(null);
//   const [usdAmount, setUsdAmount] = useState('');
//   const [btcAmount, setBtcAmount] = useState('-');

//   useEffect(() => {
//     const getPrice = async () => {
//       const currentPrice = await fetchBitcoinPrice();
//       setPrice(currentPrice);
//       setTimestamp(new Date().toLocaleTimeString());
//     };
//     getPrice();
//   }, []);

//   const handleInputChange = (value) => {
//     if (value > 100000000) value = 100000000;
//     setUsdAmount(value);
//     if (price) {
//       const convertedBtc = (value / price).toFixed(8);
//       setBtcAmount(convertedBtc);
//     } else {
//       setBtcAmount('-');
//     }
//   };

//   return (
//     <div className="bitcoin-price-widget">
//       <PriceDisplay price={price} timestamp={timestamp} />
//       <InputField value={usdAmount} onChange={handleInputChange} />
//       <Converter usdAmount={usdAmount} btcAmount={btcAmount} />
//     </div>
//   );
// };

// export default BitcoinPriceWidget;
// src/components/BitcoinPriceWidget.js

import React, { useState, useEffect } from 'react';
import { fetchBitcoinPrice } from '../services/bitcoinservices';
import PriceDisplay from './priceDisplay';
import Converter from './converter';
import InputField from './inputField';
import './bitcoinPriceWidget.css'; 

const BitcoinPriceWidget = () => {
  const [price, setPrice] = useState(null);
  const [timestamp, setTimestamp] = useState(null);
  const [usdAmount, setUsdAmount] = useState('');
  const [btcAmount, setBtcAmount] = useState('-');
  const [position, setPosition] = useState({ top: 100, left: 100 }); // Initial position
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const getPrice = async () => {
      const currentPrice = await fetchBitcoinPrice();
      setPrice(currentPrice);
      setTimestamp(new Date().toLocaleTimeString());
    };
    getPrice();
  }, []);

  const handleInputChange = (value) => {
    if (value > 100000000) value = 100000000;
    setUsdAmount(value);
    if (price) {
      const convertedBtc = (value / price).toFixed(8);
      setBtcAmount(convertedBtc);
    } else {
      setBtcAmount('-');
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        top: e.clientY - 50, // Adjusting to center the widget while dragging
        left: e.clientX - 100, // Adjusting to center the widget while dragging
      });
    }
  };

  return (
    <div
      className="bitcoin-price-widget"
      style={{ top: `${position.top}px`, left: `${position.left}px`, position: 'absolute' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <PriceDisplay price={price} timestamp={timestamp} />
      <InputField value={usdAmount} onChange={handleInputChange} />
      <Converter usdAmount={usdAmount} btcAmount={btcAmount} />
    </div>
  );
};

export default BitcoinPriceWidget;
