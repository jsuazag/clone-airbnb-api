const EXPERIENCES = require('./../repository/experiencesRepository')

const findAllExperiences = () => {
    return { experiences: EXPERIENCES }
}

const findTop5Experiences = () => {
    const experiencesSorted = EXPERIENCES.sort((a, b) => {
        if (a.score < b.score) return 1
        if (a.score > b.score) return -1
        return 0 
    })
    const top5Experiences = experiencesSorted.slice(0, 5)
    return { top5: top5Experiences }
}

const findExperience = (id) => {
    const experience = EXPERIENCES.find(el => Number(id) === el.id )
    if (experience === undefined) throw('not found')
    return { experience } // return { experience: experience }
}

module.exports = {
    findAllExperiences,
    findTop5Experiences,
    findExperience
}