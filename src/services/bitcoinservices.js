import axios from 'axios';

// The base URL for the API request to get the current Bitcoin price in USD
// here i used axios to consume the coingecko open api
const BASE_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

export const fetchBitcoinPrice = async () => {
  try {
    const response = await axios.get(BASE_URL);
    
    // get and return the Bitcoin price in USD from the API response
    return response.data.bitcoin.usd;
  } catch (error) {
    // Log any errors that occur during the API request
    console.error("Error fetching Bitcoin price:", error);
    
    // Re-throw the error to be handled by the calling function
    throw error;
  }
};
