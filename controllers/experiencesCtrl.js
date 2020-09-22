const { 
    findAllExperiences, 
    findExperience, 
    findTop5Experiences 
} = require('./../bussinesLogic/experiencesBL')

const all = async (req, res) => {
    try {
        const response = await findAllExperiences() // { experiences: [] }
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
    
}

const top5 = async (req, res) => {
    try {
        const response = await findTop5Experiences()
        res.json(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

const detail = async (req, res) => {
    const { id } = req.params
    try {
        const response = await findExperience(id)
        res.json(response)
    } catch (error) {
        res.status(error.status).send(error.msg)
    }
}

module.exports = {
    all,
    top5,
    detail
}