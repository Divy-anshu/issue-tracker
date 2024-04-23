// src/models/projectModel.js
let projects = [];

// Function to create a new project
export const createProject = (name, description, author) => {
    const project = {
        id: projects.length + 1,
        name,
        description,
        author,
    };
    projects.push(project);
    return project;
};

// Function to get all projects
export const getProjects = () => {
    return projects;
};
