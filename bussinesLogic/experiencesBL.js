const ExperiencesModel = require('../models/experiencesModel')

const findAllExperiences = async () => {
    try {
        const experiences = await ExperiencesModel.find()
        return { experiences }
    } catch (error) {
        throw error
    }
}

const findTop5Experiences = async () => {
    try {
        const top5 = await ExperiencesModel.find().sort({ score: 'desc' }).limit(5)
        return { top5 }
    } catch (error) {
        throw error
    }
}

const findExperience = async (id) => {
    try {
        const experience = await ExperiencesModel.findById(id)
        if (!experience) throw { status: 404, msg: 'Experience not found' }
        return { experience }
    } catch (error) {
        throw { status: 500, msg: error }
    }
}

module.exports = {
    findAllExperiences,
    findTop5Experiences,
    findExperience
}