const express = require("express")

const router = express.Router()

const {
    getProjects,
    getOneProject,
    createProject,
    updateProject,
    deleteProject
} = require("../controllers/projectController")

router
.route("/")
.get(getProjects)
.post(createProject)

router
.route("/:id")
.get(getOneProject)
.patch(updateProject)
.delete(deleteProject)

module.exports = router