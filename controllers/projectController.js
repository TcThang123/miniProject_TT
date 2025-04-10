const projectModel = require("../models/projectModel")

module.exports = {
    
    getProjects: async(req, res, next) => {
        try {
            const projects = await projectModel.find()
            if (!projects) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(projects)
        } catch(err) {
            next(err)
        }
    },

    getOneProject: async(req, res, next) => {
        try {
            const id = req.params.id
            const project = await projectModel.findById(id)
            if (!project) return res.status(404).json({message: "Not Found"})
            return res.status(200).json(project)
        } catch(err) {
            next(err)
        }
    },

    createProject: async(req, res, next) => {
        try {
            const body = req.body
            const newProject = await projectModel.create(body)
            return res.status(201).json(newProject)
        } catch(err) {
            next(err)
        }
    },

    updateProject: async(req, res, next) => {
        try {
            const id = req.params.id
            const body = req.body
            const updatedProject = await projectModel.finByIdAndUpdate(id, body, {new: true})
            return res.status(200).json(updatedProject)
        } catch(err) {
            next(err)
        }
    },

    deleteProject: async(req, res, next) => {
        try {
            const id = req.params.id
            const deletedProject = await projectModel.finByIdAndDelete(id)
            return res.status(200).json(deletedProject)
        } catch (err) {
            next(err)
        }
    }
}