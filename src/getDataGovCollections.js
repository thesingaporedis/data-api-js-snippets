import axios from 'axios';

async function getDataGovCollections() {
  const apiUrl = "https://api-production.data.gov.sg/v2/public/api/collections";

  try {
    const response = await axios.get(apiUrl);

    console.log('API Response:', response);
  } catch (error) {
    console.error('Error making API call:', error.message);
  }
}

export default getDataGovCollections;
