// src/models/issueModel.js

let issues = [];

// Function to create a new issue
export const createIssue = (projectId, title, description, labels, author) => {
    const issue = {
        id: issues.length + 1,
        projectId,
        title,
        description,
        labels,
        author,
    };
    issues.push(issue);
    return issue;
};

// Function to get all issues for a project
export const getIssuesByProjectId = (projectId) => {
    return issues.filter(issue => issue.projectId === projectId);
};
