// src/controllers/projectController.mjs
import { createProject as createProjectModel, getProjects as getProjectsModel } from '../models/projectModel.js';

// Create Project
export const createProject = (req, res) => {
    const { name, description, author } = req.body;
    const project = createProjectModel(name, description, author);
    res.redirect('/');
};

// Get Projects
export const getProjects = (req, res) => {
    const projects = getProjectsModel();
    res.render('home', { projects, layout: 'layout'  });
};
