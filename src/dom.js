import Task from './tasks'
import Project from './projects'
import { generateColour, validateForm } from './helpers'

let taskExample1 = new Task("Task Name", "Lorem Ipsum", "School", "2022-02-06");
let taskExample2 = new Task("Task Name", "Lorem Ipsum", "School", "2022-02-06");
let taskExample3 = new Task("Task Name", "Lorem Ipsum", "Work", "2022-02-06");
let project1 = new Project("All Tasks", "rgb(0, 0, 0)");
let project2 = new Project("School", "rgb(0, 140, 255)");
let project3 = new Project("Work", "rgb(229, 37, 82)");
let taskList = [];
let projectList = [];

taskList.push(taskExample1, taskExample2, taskExample3);
projectList.push(project1, project2, project3);

// creates main page
function renderPage() {
    console.log('hello');
    let body = document.querySelector("body");
    let header = document.createElement("header");
    let mainSection = document.createElement("div");
    let pageTitle = document.createElement("h3");
    let toggleContainer = document.createElement("div");
    let toggleIndicator = document.createElement("i");

    pageTitle.textContent = "My To-Do List";
    toggleContainer.classList.add("toggle-mode");
    toggleIndicator.classList.add("toggle-btn");
    toggleContainer.append(toggleIndicator);
    header.append(pageTitle, toggleContainer);
    mainSection.classList.add("main-body");
    
    let left = document.createElement("div");
    let leftTitle = document.createElement("h1");
    let newProjectBtn = document.createElement("div");
    let newProjectIcon = document.createElement("img");
    let newProjectText = document.createElement("p");
    let projectUL = document.createElement("ul");
    leftTitle.textContent = "Project List"
    left.classList.add("left");
    projectUL.classList.add("project-list");
    newProjectIcon.src = "../images/plus.png";
    newProjectText.textContent = "Add a Project"
    newProjectBtn.classList.add("new-project");
    newProjectBtn.append(newProjectIcon, newProjectText);
    left.append(leftTitle, projectUL, newProjectBtn);

    let right = document.createElement("div");
    let rightTitle = document.createElement("h1");
    let taskContainer = document.createElement("div");
    let newTask = document.createElement("div");
    let newTaskIcon = document.createElement("img");
    let newTaskText = document.createElement("p");
    rightTitle.textContent = "Task List";
    right.classList.add("right");
    taskContainer.classList.add("task-container");
    newTask.classList.add("new-task");
    newTaskIcon.src = "../images/plus.png";
    newTaskText.textContent = "Add a Task";
    newTask.append(newTaskIcon, newTaskText);
    right.append(rightTitle, taskContainer, newTask);

    mainSection.append(left, right);
    body.append(header, mainSection);

    toggleContainer.addEventListener('click', toggleMode);

    newProjectBtn.addEventListener('click', () => {
        renderProjectForm();
    })

    newTask.addEventListener('click', () => {
        renderTaskForm();
    })
    // addtask event listener
    // add project event listener
}

function populatePage() {
    projectList.forEach((project) => {
        renderProject(project);
    })

    taskList.forEach((task) => {
        renderTask(task);
    })
}

// function to render single task and append to container
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
    let catColour = "";

    projectList.forEach((project) => {
        if (JSON.stringify(task.project) === JSON.stringify(project.name)) {
            catColour = project.colour;
        }
    })

    taskDiv.classList.add("task");
    taskCategory.classList.add("task-category", "cat-grow");
    taskInformationContainer.classList.add("task-information");
    taskHeader.classList.add("task-title");
    taskDate.classList.add("task-date");
    iconsContainer.classList.add("icons");
    detailsContainer.classList.add("task-details", "details-visible");
    checkBtn.id = "complete";
    deleteBtn.id = "delete";
    taskCategory.style.backgroundColor = catColour;
    
    taskTitle.textContent = task.name;
    taskDate.textContent = task.date;
    details.textContent = task.description;
    checkBtn.src = "../images/check.png";
    deleteBtn.src = "../images/x.png";
    
    iconsContainer.append(checkBtn, deleteBtn);
    taskHeader.append(taskTitle, taskDate, iconsContainer);
    detailsContainer.append(details);
    taskInformationContainer.append(taskHeader, detailsContainer);
    taskDiv.append(taskCategory, taskInformationContainer);

    taskDiv.addEventListener('click', expandTask);
    deleteBtn.addEventListener('click', deleteTask);
    checkBtn.addEventListener('click', completeTask);

    let taskContainer = document.querySelector(".task-container");
    taskContainer.appendChild(taskDiv);
}

// function to render single project and append to container
function renderProject(projectDiv) {
    let projectUL = document.querySelector(".project-list");
    let projectLI = document.createElement("li");

    projectLI.textContent = projectDiv.name;
    projectUL.append(projectLI);

    projectLI.addEventListener('click', filterTasksByProject);
}

// function to render Task Creation Form
function renderTaskForm() {
    console.log('yerrr');
    let projectModal = document.createElement("div");
    let taskForm = document.createElement("form");
    let formHeader = document.createElement("div");
    let formHeaderText = document.createElement("h1");
    let formHeaderClose = document.createElement("img");
    
    projectModal.classList.add("modal");
    formHeader.classList.add("form-header");
    formHeaderClose.classList.add("form-close");
    taskForm.id = "task-form";
    formHeaderText.textContent = "New Task";
    formHeaderClose.src = "../images/x.png";
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
    formProjectList.id = "task-project-name";
    formProjectLabel.textContent = "Project";

    //loop throught project list to create options
    projectList.forEach((project) => {
        let option = document.createElement("option");
        option.textContent = project.name;
        option.value = project.name;
        formProjectList.append(option);
    })

    formProject.append(formProjectLabel, formProjectList);

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

    let body = document.querySelector("body");
    body.insertBefore(projectModal, body.firstChild);

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(formNameInput, formDescInput)) {
            let taskNameInput = formNameInput.value.trim();
            let taskDescInput = formDescInput.value.trim();
            let projectInput = formProjectList.options[formProjectList.selectedIndex].value;
            let taskDateInput = formDateInput.value;

            let newTask = new Task(taskNameInput, taskDescInput, projectInput, taskDateInput);
            taskList.push(newTask);
            renderTask(newTask);

            deleteTaskForm();
        };
    })

    formHeaderClose.addEventListener('click', deleteTaskForm);
}


// function to render Project Creation Form
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

    let body = document.querySelector("body");
    body.insertBefore(projectModal, body.firstChild);

    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(formNameInput)) {
            let projectNameInput = formNameInput.value.trim();
            let projectColour = generateColour();
            let newProject = new Project(projectNameInput, projectColour)
            let newProjectOption = document.createElement("option");

            newProjectOption.textContent = newProject.name;

            projectList.push(newProject);
            renderProject(newProject);

            deleteProjectForm();
        }
    })

    formHeaderClose.addEventListener('click', deleteProjectForm);
}

function expandTask(e) {
    // console.log(e.currentTarget);
    if (e.currentTarget.classList.contains('task-expand')) {
        e.currentTarget.classList.remove('task-expand');
        e.currentTarget.querySelector('.task-details').style.visibility = 'hidden';
    } else {
        e.currentTarget.classList.add('task-expand');
        e.currentTarget.querySelector('.task-details').style.visibility = 'visible';
    }
}

function deleteTask(e) {
    this.parentNode.parentNode.parentNode.parentNode.remove(); //delete button
}

function completeTask(e) {
    this.parentNode.parentNode.parentNode.firstChild.firstChild.classList.toggle('task-complete');
}

function toggleMode(e) {
    let header = document.querySelector('header');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let tasks = document.querySelectorAll('.task-information');

    e.currentTarget.classList.toggle('toggle-active');
    header.classList.toggle('header-light');
    left.classList.toggle('left-light');
    right.classList.toggle('right-light');
    tasks.forEach((task) => {
        task.classList.toggle('task-light');
    })
}

function deleteTaskForm() {
    let body = document.querySelector("body");
    body.firstElementChild.remove();
}

function deleteProjectForm() {
    let body = document.querySelector("body");
    body.firstElementChild.remove();
}

function filterTasksByProject(e) {
    let newTaskList = [];
    
    let taskContainer = document.querySelector(".task-container");
    taskContainer.innerHTML = "";

    if (e.target.textContent == "All Tasks") {
        taskList.forEach((task) => {
            renderTask(task);
        })
    } else {
        taskList.forEach((task) => {
            if (task.project == e.target.textContent) {
                console.log(task.project);
                newTaskList.push(task);
            }
        })
    }

    newTaskList.forEach((filteredTask) => {
        renderTask(filteredTask);
    })
}

export { renderPage, populatePage }