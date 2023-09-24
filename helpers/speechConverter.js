const axios = require('axios')

const speechConverter = async (text) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://text-to-speech27.p.rapidapi.com/speech',
            params: {
                text: text,
                lang: 'en-us'
            },
            headers: {
                'X-RapidAPI-Key': '71ac730266msh862d66a8b856303p13817fjsn83259dc99284',
                'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

module.exports = { speechConverter }