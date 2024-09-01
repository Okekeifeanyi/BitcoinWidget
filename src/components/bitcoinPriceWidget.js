import React, { useState, useEffect } from 'react';
import { fetchBitcoinPrice } from '../services/bitcoinservices';
import PriceDisplay from './priceDisplay';
import Converter from './converter';
import InputField from './inputField';
import './bitcoinPriceWidget.css'; 

// BitcoinPriceWidget Component: Displays real-time BTC price, allows USD to BTC conversion,
// and includes a draggable feature for repositioning the widget on the screen.
const BitcoinPriceWidget = () => {
  // State variables
  const [price, setPrice] = useState(null); 
  const [timestamp, setTimestamp] = useState(null);
  const [usdAmount, setUsdAmount] = useState('');
  const [btcAmount, setBtcAmount] = useState('-'); 
  const [position, setPosition] = useState({ top: 100, left: 100 }); 
  const [isDragging, setIsDragging] = useState(false);

  // useEffect hook to fetch the current Bitcoin price when the component mounts
  useEffect(() => {
    const getPrice = async () => {
      const currentPrice = await fetchBitcoinPrice(); // to get current Bitcoin price
      setPrice(currentPrice); // Update price state
      setTimestamp(new Date().toLocaleTimeString());
    };
    getPrice(); // Call the function to fetch the price
  }, []); // empty array to ensure this runs only once on mount

  // Handles input
  const handleInputChange = (value) => {
    if (value > 100000000) value = 100000000; // to maintin the inpt value to a max of 100 m
        setUsdAmount(value); // Update the USD amount state

    if (price) { 
      const convertedBtc = (value / price).toFixed(8); // Convert USD to BTC and format to 8 decimal places
      setBtcAmount(convertedBtc); 
    } else {
      setBtcAmount('-'); // If price == null, set BTC == placeholder
    }
  };


  const handleMouseDown = () => {
    setIsDragging(true); // dragging == true
  };

  // Mouse up handler to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false); // dragting == fals
  };

  // Mouse move handler to update the widget's position while dragging
  const handleMouseMove = (e) => {
    if (isDragging) { 
      setPosition({
        top: e.clientY - 50, 
        left: e.clientX - 100, 
      });
    }
  };

  // Render the widget with drag-and-drop functionality
  return (
    <div
      className="bitcoin-price-widget"
      style={{ top: `${position.top}px`, left: `${position.left}px`, position: 'absolute' }} 
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove} 
    >
      <PriceDisplay price={price} timestamp={timestamp} /> {/* Display the current Bitcoin price and timestamp */}
      <InputField value={usdAmount} onChange={handleInputChange} /> {/* Input field for USD amount */}
      <Converter usdAmount={usdAmount} btcAmount={btcAmount} /> {/* Display the converted BTC amount */}
    </div>
  );
};

export default BitcoinPriceWidget;
