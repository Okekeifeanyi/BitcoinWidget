import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

export const fetchBitcoinPrice = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.bitcoin.usd;
  } catch (error) {
    console.error("Error fetching Bitcoin price:", error);
    throw error;
  }
};
