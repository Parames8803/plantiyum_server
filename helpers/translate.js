const axios = require('axios');

const translateDetails = async (object, targetLangCode) => {
    try {
        const translatedObject = {};
        const sourceLanguage = 'en';
        const targetLanguage = targetLangCode;
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                if (Array.isArray(object[key])) {
                    const translatedArray = [];
                    object[key].forEach((value) => {
                        translatedArray.push(value);
                    });
                    translatedObject[key] = translatedArray;
                } else {
                    const value = object[key];
                    translatedObject[key] = value;
                }
            }
        }
        for (const key in translatedObject) {
            if (translatedObject.hasOwnProperty(key)) {
                const value = translatedObject[key];
                const encodedParams = new URLSearchParams();
                encodedParams.append('q', value);
                encodedParams.set('target', targetLanguage);
                encodedParams.set('source', sourceLanguage);
                const options = {
                    method: 'POST',
                    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'Accept-Encoding': 'application/gzip',
                        'X-RapidAPI-Key': '71ac730266msh862d66a8b856303p13817fjsn83259dc99284',
                        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
                    },
                    data: encodedParams,
                };
                const response = await axios.request(options);
                translatedObject[key] = response.data.data.translations[0].translatedText;
            }
        }
        return translatedObject;
    } catch (error) {
        console.log(error)
    }
};

module.exports = { translateDetails };