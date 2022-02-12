import Task from './tasks'
import Project from './projects'

let taskExample1 = new Task("Task Name", "Lorem Ipsum", "School", "02/06/2022");
let taskExample2 = new Task("Task Name", "Lorem Ipsum", "School", "02/06/2022");
let taskExample3 = new Task("Task Name", "Lorem Ipsum", "Work", "02/06/2022");
let project1 = new Project("School", "rgb(0, 140, 255)");
let project2 = new Project("School", "rgb(229, 37, 82)");
let taskList = [];
let projectList = [];
taskList.push(taskExample1, taskExample2, taskExample3);
projectList.push(project1, project2);

(function renderPage() {
    let body = document.querySelector("body");
    
    let header = document.querySelector("header");
    let pageTitle = document.createElement("h3");
    let toggleContainer = document.createElement("div");
    let toggleIndicator = document.createElement("i");

    pageTitle.textContent = "My To-Do List";
    toggleContainer.classList.add("toggle-mode");
    toggleIndicator.classList.add("toggle-btn");
    toggleContainer.append(toggleIndicator);
    header.append(pageTitle, toggleContainer);

    let left = document.createElement("div");
    let leftTitle = document.createElement("h1");
    let newProjectBtn = document.createElement("div");
    let newProjectIcon = document.createElement("img");
    let newProjectText = document.createElement("p");
    let projectUL = document.createElement("ul");
    
    let mainSection = document.createElement("div");
    mainSection.classList.add("main-body");

    leftTitle.textContent = "Project List"
    left.classList.add("left");
    projectUL.classList.add("project-list");
    newProjectIcon.src = "../images/plus.png";
    newProjectText.textContent = "Add a Project"
    newProjectBtn.classList.add("new-project");
    newProjectBtn.append(newProjectIcon, newProjectBtn);
    left.append(leftTitle, projectUL, newProjectBtn);

    //loop through project list and render each, append to ul

    let right = document.createElement("div");
    let rightTitle = document.createElement("h1");
    let taskContainer = document.createElement("div");

    rightTitle.textContent = "Task List";
    right.classList.add("right");
    taskContainer.classList.add("task-container");

    mainSection.append(left, right);

    //add event listeners
})()


function renderTask(task) {
    let taskDiv = document.createElement("div");
    let taskCategory = document.createElement("div");
    let taskInformationContainer = document.createElement("div");
    let taskHeader = document.createElement("div");
    let taskTitle = document.createElement("p");
    let taskDate = document.createElement("p");
    let iconsContainer = document.createElement("div");
    let checkBtn = document.createElement("img");
    let deleteBtn = document.createElement("img");
    let detailsContainer = document.createElement("div");
    let details = document.createElement("p");

    taskDiv.classList.add("task");
    taskCategory.classList.add("task-category", "cat-grow");
    taskInformationContainer.classList.add("task-information");
    taskHeader.classList.add("task-title");
    iconsContainer.classList.add("icons");
    detailsContainer.classList.add("task-details", "details-visible");
    checkBtn.id = "complete";
    deleteBtn.id = "delete";t
    
    askTitle.textContent = task.name;
    taskDate.textContent = task.date;
    details.textContent = task.description;
    checkBtn.src = "../images/check.png";
    deleteBtn.src = "../images/x.png";
    
    iconsContainer.append(checkBtn, deleteBtn);
    taskHeader.append(taskTitle, taskDate, iconsContainer);
    detailsContainer.append(details);
    taskInformationContainer.append(taskCategory, taskHeader, detailsContainer);
    taskDiv.append(taskInformationContainer);

    let taskContainer = document.querySelector(".task-container");
    taskContainer.appendChild(taskDiv);

    // add expand listener, delete listener
}

function renderProject(projectDiv) {
    let projectUL = document.querySelector(".project-list");
    let projectLI = document.createElement("li");

    projectLI.textContent = projectDiv.name;

    projectUL.append(projectLI);
}

function renderTaskForm() {
    let projectModal = document.createElement("div");
    projectModal.classList.add("modal");
    let taskForm = document.createElement("form");
    taskForm.id = "task-form";
    let formHeader = document.createElement("div");
    formHeader.classList.add("form-header");
    let formHeaderText = document.createElement("h1");
    formHeaderText.textContent = "New Task";
    let formHeaderClose = document.createElement("img");
    formHeaderClose.src = "../images/x.png";
    formHeaderClose.classList.add("form-close");
    formHeader.append(formHeaderText, formHeaderClose);

    let formName = document.createElement("div");
    let formNameLabel = document.createElement("label");
    let formNameInput = document.createElement("input");
    formName.classList.add("form-input");
    formNameLabel.textContent = "Task Name";
    formNameInput.id = "form-task-name";
    formNameInput.placeholder = "Task Name";
    formNameInput.type = "text";
    formName.append(formNameLabel, formNameInput);
    
    let formDesc = document.createElement("div");
    let formDescLabel = document.createElement("label");
    let formDescInput = document.createElement("textarea");
    formDesc.classList.add("form-input");
    formDescLabel.textContent = "Task Description";
    formDescInput.id = "form-task-description";
    formDescInput.placeholder = "Task Description";
    formDescInput.cols = "30";
    formDescInput.rows = "10";
    formDesc.append(formDescLabel, formDescInput);

    let formProject = document.createElement("div");
    let formProjectLabel = document.createElement("label");
    let formProjectList = document.createElement("select");
    formProject.classList.add("form-input");
    formProjectList.id = "project-name";
    formProjectLabel.textContent = "Project";

    //loop throught project list to create options

    let formDate = document.createElement("div");
    let formDateLabel = document.createElement("label");
    let formDateInput = document.createElement("input")
    formDate.classList.add("form-input");
    formDateInput.id = "date-select";
    formDateInput.type = "date";
    formDateLabel = "Finish Date";
    formDate.append(formDateLabel, formDateInput);

    let formSubmitBtn = document.createElement("button");
    formSubmitBtn.id = "task-submit";
    formSubmitBtn.textContent = "Submit";

    taskForm.append(formHeader, formName, formDesc, formProject, formDate, formSubmitBtn);
    projectModal.append(taskForm);
}

function renderProjectForm() {
    let projectModal = document.createElement("div");
    let projectForm = document.createElement("form");
    projectModal.classList.add("project-modal");
    projectForm.id = "project-form";

    let formHeader = document.createElement("div");
    let formHeaderTitle = document.createElement("h1");
    let formHeaderClose = document.createElement("img");
    formHeaderTitle.textContent = "New Project";
    formHeaderClose.src = "../images/x.png";
    formHeader.classList.add("form-header");
    formHeaderClose.classList.add("project-form-close");
    formHeader.append(formHeaderTitle, formHeaderClose);

    let formName = document.createElement("div");
    let formNameLabel = document.createElement("label");
    let formNameInput = document.createElement("input")
    formName.classList.add("form-input");
    formNameLabel.textContent = "Project Name";
    formNameInput.id = "project-name";
    formNameInput.type = "text";
    formNameInput.placeholder = "Project Name";
    formName.append(formNameLabel, formNameInput);

    let formSubmitBtn = document.createElement("button");
    formSubmitBtn.id = "project-submit";
    formSubmitBtn.textContent = "Submit";

    projectForm.append(formHeader, formName, formSubmitBtn);
    projectModal.append(projectForm);
}