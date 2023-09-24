const axios = require('axios');
const fs = require('fs');


async function getPlantDiseaseInfo(imagePath) {
  try {
    const apiKey = 'DTTrBqcxJ608OaH6U3vFNANKcI2APp5Fc04LBdmJbWuN37gJ4a';
    const image = fs.readFileSync(imagePath);
    const base64Image = Buffer.from(image).toString('base64');
    const requestData = {
      images: [base64Image],
    };
    const response = await axios.post('https://plant.id/api/v3/identification', requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': apiKey,
      },
    });
    const accessToken = response.data.access_token;
    return { accessToken };
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}



module.exports = { getPlantDiseaseInfo }
