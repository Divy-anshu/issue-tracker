import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import bodyParser from 'body-parser';
import path from "path";
import { createProject, getProjects } from './src/controllers/projectController.js';
import { createIssue, getIssuesByProjectId } from './src/controllers/issueController.js';

const app = express();

// EJS
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home Page - Show list of projects
app.get('/', getProjects);

// Create Project Page
app.get('/projects/create', (req, res) => {
    res.render('createProject');
});

// Project Detail Page - Show bugs related to a project
app.get('/projects/:projectId', getIssuesByProjectId);

// Create Issue Page
app.get('/projects/:projectId/issues/create', (req, res) => {
    const projectId = req.params.projectId;
    res.render('createIssue', { projectId });
});

// Create Project - Handle form submission
app.post('/projects/create', createProject);

// Create Issue - Handle form submission
app.post('/projects/:projectId/issues/create', createIssue);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
