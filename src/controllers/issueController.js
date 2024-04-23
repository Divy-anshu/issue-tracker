// src/controllers/issueController.mjs
import { createIssue as createIssueModel, getIssuesByProjectId as getIssuesByProjectIdModel } from '../models/issueModel.js';
import {getProjects as getProjectsModel } from '../models/projectModel.js';

// Create Issue
export const createIssue = (req, res) => {
    const {title, description, labels, author } = req.body;
    const projectId = req.params.projectId;
    const issue = createIssueModel(projectId, title, description, labels, author);
    res.redirect(`/projects/${projectId}`);
};

// Get Issues By Project Id
export const getIssuesByProjectId = (req, res) => {
    const projectId = req.params.projectId;
    const issues = getIssuesByProjectIdModel(projectId);
    const project = getProjectsModel().find((pro) => pro.id === parseInt(projectId))
    res.render('projectDetail', { project, issues });
};
