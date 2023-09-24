
const plantController = async (req, res) => {
    try {
        res.send(req.diseaseDetails);
    } catch (error) {
        console.log(error)
    }
}

const translateController = async (req, res) => {
    try {
        const object = req.body.object;
        const langCode = req.body.langCode;
        const translate = await translateDetails(object, langCode);
        res.send(translate)
    } catch (error) {
        console.log(error)
    }
}

const speechController = async (req, res) => {
    try {
        const text = req.body.text;
        const convertedText = await speechConverter(text);
        res.send(convertedText)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { plantController, translateController, speechController }