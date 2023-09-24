const { getPlantDiseaseInfo } = require('../helpers/getDisease')
const { getReasonInfo } = require('../helpers/getReason')

const plantDetails = async (req, res, next) => {
    try {
        const filePath = req.filePath;
        const getDisease = await getPlantDiseaseInfo(filePath);
        const getReason = await getReasonInfo(getDisease)
        req.diseaseDetails = getReason;
        next()
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    plantDetails
}


